import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";
import planetsRepository from "../../models/planet/PlanetRepository";

export default function Planets() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allPlanets, setAllPlanets] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const planets = planetsRepository.getAll();
      setAllPlanets(planets);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Title title="Planets" />
      <Text>Tela de listagem de todos os usuários</Text>

      {allPlanets.length > 0 ? (
        <View style={styles.planetList}>
          {allPlanets.map((planet) => (
            <View key={planet.id} style={styles.planetItem}>
              <View>
                <Text style={styles.planetId}>{planet.id}</Text>
              </View>
              <View>
                <Text style={styles.planetName}>{planet.name}</Text>
              </View>
              <View>
                <Text style={styles.planetDate}>{planet.date}</Text>
              </View>
              <View>
                <Text style={styles.planetPrimaryColor}>{planet.primaryColor}</Text>
              </View>
              <View>
                <Text style={styles.planetSecondaryColor}>{planet.secondaryColor}</Text>
              </View>
              <View>
                <Text style={styles.planetPopulation}>{planet.population}</Text>
              </View>
              <View>
                <Text style={styles.planetLocalization}>{planet.localization}</Text>
              </View>
              <View>
                <Text style={styles.planetRuler}>{planet.ruler}</Text>
              </View>
              <View style={styles.planetActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate("Profile", { data: planet })}

                >
                
                  <Text>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há usuários cadastrados</Text>
      )}
    </View>
  );
}
