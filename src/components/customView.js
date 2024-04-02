import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const customView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
  },
  bigCircle: {
    width: Dimensions.get("window").height * 0.7,
    height: Dimensions.get("window").height * 0.7,
    backgroundColor: "#ff6b81",
    borderRadius: 1000,
    position: "absolute",
    right: Dimensions.get("window").width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get("window").height * 0.4,
    height: Dimensions.get("window").height * 0.4,
    backgroundColor: "#ff7979",
    borderRadius: 1000,
    position: "absolute",
    bottom: Dimensions.get("window").width * -0.2,
    right: Dimensions.get("window").width * -0.3,
  },
  centerizedView: {
    flex: 1,
    opacity: 0.8,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
});
export default customView;
