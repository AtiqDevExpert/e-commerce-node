import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import DetailScreen from "../screens/DetailScreen/DetailScreen";
import CartScreen from "../screens/CartScreen/CartScreen";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
