import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FastImage from "react-native-fast-image";
import { Colors } from "../utilis/colors";
import { useSelector } from "react-redux";
const Header = () => {
  const userData = useSelector((state) => state?.loginUser?.data?.user);
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <View style={styles.lineView}>
        <View>
          <Text style={styles.welcome}>Welcome to E Store</Text>
          <Text style={styles.name}>{userData.name}</Text>
        </View>
        <TouchableOpacity style={styles.touch} onPress={navigateToProfile}>
          <FastImage
            style={styles.image}
            source={{ uri: userData.profilePicture }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dangerColor,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  image: { width: 40, height: 40, borderRadius: 100 },
  lineView: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: { fontSize: 16, color: Colors.white, fontWeight: "700" },
  name: { fontSize: 12, color: Colors.white, fontWeight: "700" },
});
export default Header;
