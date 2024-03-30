import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import DetailScreen from "../screens/DetailScreen/DetailScreen";
import CartScreen from "../screens/CartScreen/CartScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import ResetPassword from "../screens/ResetPassword/resetPassword";
import TabScreen from "../Tabs/TabScreen";
import { LogBox } from "react-native";
import Resend from "../screens/Resend/resend";
import EditProfile from "../ButtomTab/EditProfile/EditProfile";
LogBox.ignoreAllLogs();
const Stack = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="login"
        component={LoginScreen}
      />
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="Detail"
        component={DetailScreen}
      />
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="Cart"
        component={CartScreen}
      />
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="account"
        component={RegisterScreen}
      />
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="resetPassword"
        component={ResetPassword}
      />
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="resend"
        component={Resend}
      />
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="editProfile"
        component={EditProfile}
      />
      <stack.Screen name="tabs" component={TabScreen} />
    </stack.Navigator>
  );
};

export default Stack;
