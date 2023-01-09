import React from "react";
import { Button, View } from "react-native";

import Container from "../styles/containerStyles/Container.js";
import AltContainer from "../styles/containerStyles/AltContainer";
import BtnContainer from "../styles/containerStyles/BtnContainer";

const ButtonBasics = () => {
  const _onPressButton = () => {
    alert("You tapped the button c:");
  };

  return (
    <View style={Container}>
      <View style={BtnContainer}>
        <Button onPress={_onPressButton} title="Press Me" />
      </View>
      <View style={BtnContainer}>
        <Button
          onPress={_onPressButton}
          title="Press Me"
          color="midnightblue"
        />
      </View>
      <View style={AltContainer}>
        <Button onPress={_onPressButton} title="This looks great!" />
        <Button onPress={_onPressButton} title="OK!" color="purple" />
      </View>
    </View>
  );
};

export default ButtonBasics;
