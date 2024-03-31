import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "@react-native-firebase/app";

LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();
import firebaseConfig from "./src/utilis/config";

import { Provider } from "react-redux";
import { LogBox } from "react-native";
import Stack from "./src/Stack/Stack";
if (!firebase.apps.length) {
  firebase.initializeApp({ firebaseConfig });
} else {
  firebase.app();
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
