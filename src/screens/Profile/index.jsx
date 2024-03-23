import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import planetsRepository from "../../models/planet/PlanetRepository";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlanet = () => {
    navigation.navigate("Form", { planet: data, edit: true });
  };

  const deletePlanet = () => {
    planetsRepository.remove(data.id);
    navigation.navigate("Planets");
  };

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      {data ? (
        <Text>Detalhes do usuário</Text>
      ) : (
        <Text>Selecione um usuário para exibir seus detalhes</Text>
      )}

      <View style={styles.planet}>
        <View style={styles.planetDetail}>
          <Text style={styles.planetName}>{data.name}</Text>
        </View>
        <View style={styles.planetDetail}>
          <Text style={styles.planetDate}>{data.date}</Text>
        </View>
        <View style={styles.planetDetail}>
          <Text style={styles.planetPrimaryColor}>{data.primaryColor}</Text>
        </View>
        <View style={styles.planetDetail}>
          <Text style={styles.planetSecondaryColor}>{data.secondaryColor}</Text>
        </View>
        <View style={styles.planetDetail}>
          <Text style={styles.planetPopulation}>{data.population}</Text>
        </View>
        <View style={styles.planetDetail}>
          <Text style={styles.planetLocalization}>{data.localization}</Text>
        </View>
        <View style={styles.planetDetail}>
          <Text style={styles.planetRuler}>{data.ruler}</Text>
        </View>
         
        <View style={styles.planetActions}>
          <TouchableOpacity style={styles.editButton} onPress={editPlanet}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deletePlanet}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
