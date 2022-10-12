import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ButtonBasics from "./src/components/Buttons";
import ToucheableBtn from "./src/components/TouchableBtn";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        First text from React Native to Android c:
      </Text>
      <StatusBar style="auto" />

      <ButtonBasics />
      <ToucheableBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "blue",
  },
});
