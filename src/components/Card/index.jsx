import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Card = ({ title, image, descri }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{descri}</Text>
    </View>
  );
};

export default Card;
