import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "medium",
    color: "#FFF",
  },
  containerimg: {
    marginTop: 20,
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: "#000",
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: "#000",
    borderWidth: 1,
  },
  imagemfundo: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;
