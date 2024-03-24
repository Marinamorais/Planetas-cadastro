import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(128, 128, 128, 0.2)', // Cinza com 70% de transparência
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 20,
        margin: 5,
        fontWeight: 'bold',
        color: '#451952',
    },
    info: {
        fontSize: 14,
        margin: 2,
        color: '#333',
        fontFamily: 'monospace',
    },
});

export default styles;
