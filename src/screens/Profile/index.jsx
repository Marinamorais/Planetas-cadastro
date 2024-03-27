import { Text, View, Image } from "react-native";

import styles from "./styles";

import Header from "../../components/Header";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagemfundo}
        source={require("../../../assets/fundo04.png")}
      />
      <Header />

      <Text style={styles.text}>Marina Elis de Morais🌌</Text>
      <View style={styles.containerimg}>
        <Image
          style={styles.imagem}
          source={require("../../../assets/marina.png")}
        />
      </View>
      <View style={styles.containercard}>
        <View style={styles.card}>
          <Text style={styles.textcard}>
            Estudante de Desenvolvimento de Sistmas
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textcard}></Text>
        </View>
      </View>
    </View>
  );
}
