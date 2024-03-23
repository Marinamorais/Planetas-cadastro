import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import planetsRepository from "../../models/planet/PlanetRepository";
import Planet from "../../models/planet/Planet";

export default function Form({ route }) {
  let { planet, edit } = route.params;

  const [name, setName] = useState("");
  const [date , setDate] = useState("");
  const [ primarycore , setPrimarycore] = useState("");
  const [secondarycore , setSecondarycore] = useState("");
  const [population , setPopulation] = useState("");
  const [localization , setLocalization] = useState("");
  const [ruler , setRuler] = useState("");

  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(planet.name);
      setDate(planet.date);
      setPrimarycore(planet.primarycore);
      setSecondarycore(planet.secondarycore);
      setPopulation(planet.population);
      setLocalization(planet.localization);
      setRuler(planet.ruler);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [planet, edit]);

  const handlePlanetAction = () => {
    if (isUpdate) {
      planetsRepository.update(planet.id, name, primarycore, secondarycore, population, localization, ruler);
      clearInputs();
    } else {
      const newPlanet = new Planet(name, primarycore, secondarycore, population, localization, ruler);
      planetsRepository.add(newPlanet);
      clearInputs();
    }
    navigation.navigate("Planets");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setName("");
    setDate("");
    setPrimarycore("");
    setSecondarycore("");
    setPopulation("");
    setLocalization("");
    setRuler("");
  };

  return (
    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Usuário" : "Novo Usuário"} />
      <TextInput
        placeholder="Digite o nome do usuário"
        style={styles.planetInput}
        onChangeText={setName}
        value={name}
      />
       <TextInput
          style={styles.input}
          placeholder="Date"
          value={date}
          onChangeText={setDate}
          keyboardType="numeric"
        />
      <TextInput
        placeholder="Digite a cor primária do usuário"
        style={styles.planetInput}
        onChangeText={setPrimarycore}
        value={primarycore}
      />
      <TextInput
        placeholder="Digite a cor secundária do usuário"
        style={styles.planetInput}
        onChangeText={setSecondarycore}
        value={secondarycore}
      />
      <TextInput
        placeholder="Digite a população do usuário"
        style={styles.planetInput}
        onChangeText={setPopulation}
        value={population}
      />
      <TextInput
        placeholder="Digite a localização do usuário"
        style={styles.planetInput}
        onChangeText={setLocalization}
        value={localization}
      />
      <TextInput
        placeholder="Digite o governante do usuário"
        style={styles.planetInput}
        onChangeText={setRuler}
        value={ruler}
      />
      <TouchableOpacity style={styles.button} onPress={handlePlanetAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Usuário"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
