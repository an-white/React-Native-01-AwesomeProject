import React from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ToucheableBtn = () => {
  const _onPressButton = () => {
    alert("You tapped the button c:");
  };

  const _onLongPressButton = () => {
    alert("You press for a long time the button pay for it >:v");
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={_onPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={_onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>
      <TouchableNativeFeedback
        onPress={_onPressButton}
        background={
          Platform.OS === "android"
            ? TouchableNativeFeedback.SelectableBackground()
            : ""
        }
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableNativeFeedback{" "}
            {Platform.OS !== "android" ? "(Android only)" : ""}
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback onPress={_onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight
        onPress={_onPressButton}
        onLongPress={_onLongPressButton}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});

export default ToucheableBtn;
