import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import Toast from "react-native-root-toast";
import { Colors } from "../../utilis/colors";
import styles from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../../components/Button";
import FastImage from "react-native-fast-image";
import Loading from "../../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { verify_email } from "../../utilis/api/Requests";
const ForgetPasswordScreen = ({ navigation }) => {
  const [emailValue, setEmailValue] = useState("");

  const [loading, setLoading] = useState(false);
  const backToLogin = () => {
    navigation.navigate("login");
  };
  const onHandleVerifyEmail = async () => {
    setLoading(true);
    const body = {
      email: emailValue,
    };

    console.log("onHandleVerifyEmail body ===== > ", body);
    if (!body.email.includes("@")) {
      alert("Invalid Credential! Please check your email has @ ");
      setLoading(false);
    } else {
      try {
        let response = await verify_email(body);
        console.log("response ==== > ", response);

        const data = {
          userID: response.id,
          route: "recover",
        };
        await AsyncStorage.setItem("ROUTE_INFO", JSON.stringify(data));
        Toast.show(response.message, Toast.LONG);
        navigation.navigate("otp");
        setLoading(false);
      } catch (error) {
        console.error("Error signing up:", error);
        Toast.show(error.message, Toast.LONG);
        setLoading(false);
      }
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraScrollHeight={100}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.bigCircle}></View>
          <View style={styles.smallCircle}></View>

          <View style={styles.centerizedView}>
            <View style={styles.authBox}>
              <View style={styles.logoBox}>
                <FastImage
                  style={styles.image}
                  source={require("../../assets/images/appImage.png")}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </View>
              <Text style={styles.loginTitleText}>Recover Password</Text>
              <View style={styles.hr}></View>

              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  value={emailValue}
                  label="Email"
                  onChangeText={(text) => setEmailValue(text)}
                  secure={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              <Button
                text={"Get OTP"}
                color={Colors.white}
                fontSize={20}
                height={50}
                width={"100%"}
                marginTop={30}
                backgroundColor={Colors.dangerColor}
                borderColor={Colors.dangerColor}
                marginBottom={10}
                fontWeight={"bold"}
                onPress={onHandleVerifyEmail}
              />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <Text style={styles.registerText}>Remember Passowrd ?</Text>
                <TouchableOpacity
                  style={{ justifyContent: "center", alignItems: "center" }}
                  onPress={backToLogin}
                >
                  <Text style={[styles.registerText, { color: "#ff4757" }]}>
                    {" " + `Login Now`}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {loading && <Loading />}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default ForgetPasswordScreen;
