import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ButtonBasics from "./src/components/Buttons";
import ModalComponent from "./src/components/Modals";
import ToucheableBtn from "./src/components/TouchableBtn";
import Home from "./src/components/Home";
import Profile from "./src/components/Profile";
import Title from "./src/components/Title";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        {/* esta vista de navegacion contiene una vista principal y todas las pantalles que esta contiene, de primero definimos la primera vista a renderizar y despues las vistas hijas */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
          Title={Title}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Buttons" component={ButtonBasics} />
        <Stack.Screen name="Touchable" component={ToucheableBtn} />
        <Stack.Screen name="Modal" component={ModalComponent} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
