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
    fontWeight: "500",
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
  containercard: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%", 
  },
  textcard: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFF",
  },
  textcard01: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFF",
    marginBottom: 20,
  },
  textcard02: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFF",
    marginBottom: 10,
  },
  card03: {
    gap: 10,
    flexDirection: "column",
    
  },

});

export default styles;
