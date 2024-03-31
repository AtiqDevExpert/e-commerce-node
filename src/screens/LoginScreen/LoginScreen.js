import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import FastImage from "react-native-fast-image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../assets/svg/SvgIcons";
import { Colors } from "../../utilis/colors";
import Button from "../../components/Button";
import Toast from "react-native-root-toast";
import Loading from "../../components/Loading";
import { Login_Request } from "../../utilis/api/Requests";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleCreateAccount = () => {
    navigation.navigate("createAccount");
  };
  const onHandleLogin = async () => {
    setLoading(true);
    const body = {
      email: emailValue,
      password: passwordValue,
    };

    console.log("Login body ===== > ", body);
    if (!body.email.includes("@") || body.password.length < 8) {
      alert(
        "Invalid Credential! Please check your email has @ and password should be 8 or greater than 8 characters"
      );
      setLoading(false);
    } else {
      try {
        let response = await Login_Request(body);
        console.log("response ==== > ", response);
        await AsyncStorage.setItem("USER_TOKEN", response.token);
        await AsyncStorage.setItem("USER_INFO", JSON.stringify(response.data));
        Toast.show("Successfully Login", Toast.LONG);

        navigation.navigate("tabs");
        setLoading(false);
      } catch (error) {
        console.error("Error Login :", error);
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
              <Text style={styles.loginTitleText}>Login</Text>
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
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordInputContainer}>
                  <TextInput
                    placeholder="Password"
                    style={styles.input}
                    autoCapitalize="none"
                    secureTextEntry={secureTextEntry}
                    value={passwordValue}
                    onChangeText={(text) => setPasswordValue(text)}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                    }}
                    style={styles.eyeIconContainer}
                  >
                    <FontAwesome
                      name={secureTextEntry ? "eye-slash" : "eye"}
                      size={18}
                      color={Colors.black}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <Button
                text={"Login"}
                color={Colors.white}
                fontSize={20}
                height={50}
                width={"100%"}
                marginVertical={20}
                backgroundColor={Colors.dangerColor}
                borderColor={Colors.dangerColor}
                marginBottom={10}
                fontWeight={"bold"}
                onPress={onHandleLogin}
              />

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <Text style={styles.registerText}>Don't have an account ?</Text>
                <TouchableOpacity
                  style={{ justifyContent: "center", alignItems: "center" }}
                  onPress={handleCreateAccount}
                >
                  <Text style={[styles.registerText, { color: "#ff4757" }]}>
                    {" " + `Register Now`}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.lineView}>
                <View style={styles.leftLine} />
                <Text style={styles.or}>or</Text>
                <View style={styles.rightLine} />
              </View>
              <View style={styles.socialview}>
                <FacebookIcon style={styles.icon} />
                <GoogleIcon style={styles.icon} />
                {Platform.OS === "ios" && <AppleIcon style={styles.icon} />}
              </View>
            </View>
          </View>
          {loading && <Loading />}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};
export default LoginScreen;
