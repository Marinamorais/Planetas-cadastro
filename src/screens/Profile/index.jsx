import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";



export default function Profile(){
   return (
    <View style={styles.container}>
      <Title title="Profile" />
      <Text>Nome: Thayná</Text>
      <Text>Data de Nascimento: 20/09/2001</Text>
      <Text>Cor Primária: Azul</Text>
      <Text>Cor Secundária: Rosa</Text>
      <Text>População: 1</Text>
      <Text>Localização: Brasil</Text>
      <Text>Regente: Thayná</Text>
    </View>
  );
}


 

