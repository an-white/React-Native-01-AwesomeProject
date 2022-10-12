import { Button, View } from "react-native";

import Title from "./Title";

import Container from "../styles/containerStyles/Container.js";
import BtnContainer from "../styles/containerStyles/BtnContainer";

const Home = ({ navigation }) => {
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
    </View>
  );
};

export default Home;
