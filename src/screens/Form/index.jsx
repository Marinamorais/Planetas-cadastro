import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
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
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [population, setPopulation] = useState("");
  const [localization, setLocalization] = useState("");
  const [ruler, setRuler] = useState("");

  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(planet.name);
      setDate(planet.date);
      setPrimaryColor(planet.primaryColor);
      setSecondaryColor(planet.secondaryColor);
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
        primaryColor,
        secondaryColor,
        population,
        localization,
        ruler
      );

      clearInputs();
    } else {
      const newPlanet = new Planet(
        name,
        date,
        primaryColor,
        secondaryColor,
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
    setPrimaryColor("");
    setSecondaryColor("");
    setPopulation("");
    setLocalization("");
    setRuler("");
  };

  return (
    <View style={styles.fundo}>
      <Image
        style={styles.imagemfundo}
        source={require("../../../assets/fundo05.png")}
      />
      <View style={styles.container}>
        <Title
          style={styles.title}
          title={isUpdate ? "Editar Planeta" : "Novo Planeta"}
        />
        <TextInput
          placeholder="Digite o nome do planeta"
          style={styles.planetInput}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.planetInput}
          placeholder="Digite a data do planeta (AAAA-MM-DD)"
          value={date}
          onChangeText={setDate}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Digite a cor primária do planeta"
          style={styles.planetInput}
          onChangeText={setPrimaryColor}
          value={primaryColor}
        />
        <TextInput
          placeholder="Digite a cor secundária do planeta"
          style={styles.planetInput}
          onChangeText={setSecondaryColor}
          value={secondaryColor}
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
    </View>
  );
}
