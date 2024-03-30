import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { FacebookIcon, GoogleIcon, AppleIcon } from "../../SVG/SvgIcons";
import { useNavigation } from "@react-navigation/native";
const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.lineView}>
        <View style={styles.leftLine} />
        <Text style={styles.or}>Or</Text>
        <View style={styles.rightLine} />
      </View>

      <View style={styles.socialview}>
        <FacebookIcon style={styles.icon} />
        <GoogleIcon style={styles.icon} />
        {Platform.OS === "ios" && <AppleIcon style={styles.icon} />}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footertext}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("account")}>
          <Text style={styles.footertext2}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  or: {
    color: "#08101F",
    fontSize: 15,
    alignSelf: "center",
    paddingHorizontal: 5,
  },
  leftLine: {
    backgroundColor: "#D7DADF",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  rightLine: {
    backgroundColor: "#D7DADF",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  lineView: {
    flexDirection: "row",
    marginTop: 30,
  },
  socialview: {
    flexDirection: "row",
    marginVertical: 40,
    justifyContent: "space-around",
  },
  footer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  footertext: {
    fontSize: 15,
    color: "#D7DADF",
  },
  footertext2: {
    fontSize: 15,
    color: "#4AB5E3",
    paddingHorizontal: 5,
  },
  icon: {
    height: 40,
    width: 40,
    alignSelf: "center",
  },
});
export default Footer;
