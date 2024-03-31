import { Text, View, Image, ScrollView } from "react-native";

import styles from "./styles";

import Header from "../../components/Header";
import Card from "../../components/Card";




export default function Profile() {
 
   return ( 
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.imagemfundo}
        source={require("../../../assets/fundo08.jpg")}
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
        <View style={styles.card01}>
          <Text style={styles.textcard01}>
            Olá me chamo Marina, tenho 17 anos, sou estudante de Desenvolvimento de sistemas e estou no 3° ano do ensino médio. Gosto de jogar, assistir séries e filmes, ouvir música e ler. Meu maior sonho é me tornar uma desenvolvedora de UI. 
          </Text>
          <Text style={styles.textcard02}>
             Tecnologias utilizadas.
          </Text>
          <View style={styles.card03}>
           <Card
            title="HTML"
            image={require("../../../assets/tec01.png")}
            descri="Linguagem de marcação de hipertexto"
           />
           <Card
            title="CSS"
            image={require("../../../assets/tec02.png")}
            descri="Folha de estilo em cascata"
           />
           <Card
            title="JavaScript"
            image={require("../../../assets/tec06.png")}
            descri="Linguagem de programação"
           />
           <Card
            title="React Native"
            image={require("../../../assets/tec04.png")}
            descri="Framework de desenvolvimento de aplicativos móveis multiplataforma"
           />
           <Card
            title="Node.js"
            image={require("../../../assets/tec05.png")}
            descri="Ambiente de execução JavaScript server-side"
           />
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
  );
}
