import { StyleSheet, Text } from "react-native";

const Title = () => {
  return (
    <Text style={styles.title}>First text from React Native to Android c:</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: "white",
    fontWeight: "bold",
    padding: 20,
    marginBottom: 10,
    alignSelf: "center",
    color: "blue",
    borderRadius: 10,
  },
});

export default Title;
