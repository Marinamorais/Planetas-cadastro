import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';


const Card = ({ title, image, }) => {
    return (
        <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>Data de descobrimento : XVI e XVII</Text>
        <Text style={styles.info}>Cor: Rosa</Text>
        <Text style={styles.info}>Cor seguntaria : Azul</Text>

        </View>
    );
}

export default Card;