import React from "react";
import { Button, StyleSheet, View } from "react-native";

const ButtonBasics = () => {
  const _onPressButton = () => {
    alert("You tapped the button c:");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={_onPressButton} title="Press Me" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={_onPressButton} title="Press Me" color="#841584" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={_onPressButton} title="This looks great!" />
        <Button onPress={_onPressButton} title="OK!" color="#841584" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    maxHeight: 200,
    margin: 20,
    backgroundColor: "orange",
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ButtonBasics;
