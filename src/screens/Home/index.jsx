import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View>
          <Text style={styles.text}>PlanetMix</Text>
        </View>
        <View style={styles.descri}>
          <Text style={styles.text02}>
            O sistema solar sempre foi um dos assuntos mais fascinantes para
            humanidade. Afinal, ele é composto por planetas, estrelas, satélites
            e outros corpos celestes que despertam a curiosidade de todos. Neste
            aplicativo, você poderá conhecer um pouco mais sobre os planetas que
            compõem o seu proprio sistema solar.
          </Text>
        </View>
        <View>
          <Card
            title="Venús"
            descri=" Vênus é o segundo do nosso sistema solar a partir do Sol e o mais próximo da Terra,a apenas 61 milhões de quilômetros de distância."
            image={require("../../../assets/venus.png")}
          />
          <Card
            title="Terra"
            descri="Terra é considerada um planeta telúrico e possui sua estrutura interna dividida em:crosta terrestre, manto e núcleo."
            image={require("../../../assets/terra.png")}
          />
          <Card
            title="Marte"
            descri="Marte é um dos nove planetas do Sistema Solar. A sua órbita ocupa a quarta posição a partir do Sol, o que significa dizer que ele está posicionado entre a Terra e Júpiter."
            image={require("../../../assets/planeta.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
