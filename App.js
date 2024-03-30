import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "@react-native-firebase/app";

LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();
import firebaseConfig from "./src/utilis/config";
import Stack from "./src/Stack/Stack";
import { Provider } from "react-redux";
import { LogBox } from "react-native";
if (!firebase.apps.length) {
  firebase.initializeApp({ firebaseConfig });
} else {
  firebase.app(); // if already initialized, use that one
}
console.log(firebase.apps.length);
const App = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
