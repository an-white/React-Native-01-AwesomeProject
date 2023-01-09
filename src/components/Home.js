import { Button, View, BackHandler, Alert } from "react-native";
import React, { useEffect } from "react";

import Title from "./Title";

import Container from "../styles/containerStyles/Container.js";
import BtnContainer from "../styles/containerStyles/BtnContainer";

const Home = ({ navigation }) => {
  // declare validation close the app popup
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to close my app? :c", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View style={Container}>
      <Title />
      <View style={BtnContainer}>
        <Button
          color="purple"
          title="Go to Jane's profile"
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
        />
      </View>
      <View style={BtnContainer}>
        <Button
          color="midnightblue"
          title="Go to Buttons samples"
          onPress={() => navigation.navigate("Buttons")}
        />
      </View>
      <View style={BtnContainer}>
        <Button
          title="Go to Touchable samples"
          onPress={() => navigation.navigate("Touchable")}
        />
      </View>
      <View style={BtnContainer}>
        <Button
          color="yellowgreen"
          title="Go to Modal sample"
          onPress={() => navigation.navigate("Modal")}
        />
      </View>
      <View style={BtnContainer}>
        <Button
          color="red"
          title="its working"
          onPress={() => navigation.navigate("Vibration")}
        />
      </View>
      <View style={BtnContainer}>
        <Button
          color="lightblue"
          title="Forms"
          onPress={() => navigation.navigate("Forms")}
        />
      </View>
    </View>
  );
};

export default Home;
