import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  planetList: {
    width: "50%",
    marginTop: 20,
  },
  planetItem: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  planetName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#fff", 
  },
  planetDate: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "#fff", 
  },
  planetPrimaryColor: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "#fff", 
  },
  planetSecondaryColor: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "#fff", 
  },
  planetPopulation: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "#fff", 
  },
  planetLocalization: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "#fff", 
  },
  planetRuler: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "#fff",
  },
  planetActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#2ecc71",
    padding: 8,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    padding: 8,
    borderRadius: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;
