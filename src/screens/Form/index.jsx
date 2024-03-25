import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import planetsRepository from "../../models/planet/PlanetRepository";
import Planet from "../../models/planet/Planet";

export default function Form({ route }) {
  const { planet, edit } = route.params;

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [primarycore, setPrimarycore] = useState("");
  const [secondarycore, setSecondarycore] = useState("");
  const [population, setPopulation] = useState("");
  const [localization, setLocalization] = useState("");
  const [ruler, setRuler] = useState("");

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
      planetsRepository.update(
        planet.id,
        name,
        date,
        primarycore,
        secondarycore,
        population,
        localization,
        ruler
      );
      clearInputs();
    } else {
      const newPlanet = new Planet(
        name,
        date,
        primarycore,
        secondarycore,
        population,
        localization,
        ruler
      );
      planetsRepository.add(newPlanet);
      clearInputs();
    }
    navigation.navigate("Planets");
  };

  const clearInputs = () => {
    setIsUpdate(false);
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
      <Title title={isUpdate ? "Editar Planeta" : "Novo Planeta"} />
      <TextInput
        placeholder="Digite o nome do planeta"
        style={styles.planetInput}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.planetInput}
        placeholder="Digite a data"
        value={date}
        onChangeText={setDate}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite a cor primária do planeta"
        style={styles.planetInput}
        onChangeText={setPrimarycore}
        value={primarycore}
      />
      <TextInput
        placeholder="Digite a cor secundária do planeta"
        style={styles.planetInput}
        onChangeText={setSecondarycore}
        value={secondarycore}
      />
      <TextInput
        placeholder="Digite a população do planeta"
        style={styles.planetInput}
        onChangeText={setPopulation}
        value={population}
      />
      <TextInput
        placeholder="Digite a localização do planeta"
        style={styles.planetInput}
        onChangeText={setLocalization}
        value={localization}
      />
      <TextInput
        placeholder="Digite o governante do planeta"
        style={styles.planetInput}
        onChangeText={setRuler}
        value={ruler}
      />
      <TouchableOpacity style={styles.button} onPress={handlePlanetAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Planeta"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
