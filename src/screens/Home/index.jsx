import { Text, View } from "react-native";
import styles from "./styles";
import Card from "../../components/Card";


export default function Home() {
  return (
    
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Seja bem-vindo ao PlanetMix</Text>
      </View>
      <View style={styles.descri}> 
        <Text style={styles.text02}>Neste app nosso intuito é fazer cadastro dos planetas, venha criar e se diverti</Text>
      </View>
      <View>
        <Card title="Venús" image={require("../../../assets/venus.png")}/>
      </View>
    </View>
  );
}

