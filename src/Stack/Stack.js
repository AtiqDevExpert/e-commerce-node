import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import DetailScreen from "../screens/DetailScreen/DetailScreen";
import CartScreen from "../screens/CartScreen/CartScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import TabScreen from "../Tabs/TabScreen";
import EditProfile from "../ButtomTab/EditProfile/EditProfile";
import OtpScreen from "../screens/OtpScreen/OtpScreen";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen/ForgetPasswordScreen";
import CreateNewPassswordScreen from "../screens/CreateNewPassswordScreen/CreateNewPassswordScreen";
import CreateProductScreen from "../ButtomTab/CreateProductScreen/CreateProductScreen";

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
        name="otp"
        component={OtpScreen}
      />
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="createAccount"
        component={RegisterScreen}
      />

      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="createProduct"
        component={CreateProductScreen}
      />
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="forget"
        component={ForgetPasswordScreen}
      />
      <stack.Screen
        screenOptions={{ headerShown: false }}
        name="createPassword"
        component={CreateNewPassswordScreen}
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
