import "react-native-gesture-handler";
import { enableLatestRenderer } from "react-native-maps";
enableLatestRenderer();
import { LogBox } from "react-native";
import React from "react";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import RootNavigator from "./src/routes";
import firebase from "@react-native-firebase/app";

LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();
const firebaseConfig = {
  // appId: "1:629600719957:ios:736a6bdaf340ffa46270dc",

  apiKey: "AIzaSyAT2RA0JUlJyjLPWjFoKxAfYFflTks1xlo",
  authDomain: "e-commerce-a5d5f.firebaseapp.com",
  databaseURL: "https://e-commerce-a5d5f-default-rtdb.firebaseio.com",
  projectId: "e-commerce-a5d5f",
  storageBucket: "e-commerce-a5d5f.appspot.com",
  messagingSenderId: "629600719957",

  appId: "1:629600719957:android:0c2edf5060a49b6e6270dc",
  // appId: "1:629600719957:web:17a3b3f7d7397c946270dc",
};
firebase.initializeApp(firebaseConfig);
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
