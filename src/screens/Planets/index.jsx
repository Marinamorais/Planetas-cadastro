import { View } from "react-native";

import styles from "./styles.js";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

export default function Planets() {
  return (
    <View style={styles.container}>
      <Title title="Planets" />

      <TouchButton route="Planets" title="Go to Category" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}
