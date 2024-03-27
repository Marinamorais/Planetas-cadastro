import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    width: "80%",
    height: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  planetInput: {
    width: "80%",
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    textShadowColor: "#FFF",
    textShadowOffset: { width: 1, height: 1 },
    fontSize: 16,
  },
  fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagemfundo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;
