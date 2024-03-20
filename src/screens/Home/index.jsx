import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />

      <TouchButton route="Planets" title="Go to Planets" />

      <TouchButton route="Users" title="Go to Users" />

      <TouchButton route="UsersList" title="Go to Users List" />
    </View>
  );
}
