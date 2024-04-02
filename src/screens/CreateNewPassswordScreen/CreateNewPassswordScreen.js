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
import Modal from "react-native-modal";
import ImagePicker from "react-native-image-crop-picker";
import Toast from "react-native-root-toast";
import { Colors } from "../../utilis/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CrossRedIcon, UploadIcon } from "../../assets/svg/SvgIcons";
import styles from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebaseUploader from "../../utilis/firebaseUpload";
import Button from "../../components/Button";
import FastImage from "react-native-fast-image";
import Loading from "../../components/Loading";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import { SignUp_Request, Update_Password } from "../../utilis/api/Requests";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CreateNewPassswordScreen = ({ navigation }) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [secureTextEntryPasssword, setSecureTextEntryPassword] = useState(true);
  const [secureTextEntryConfirmPasssword, setSecureTextEntryConfirmPasssword] =
    useState(true);
  const backToLogin = () => {
    navigation.navigate("login");
  };
  const onHandleCreateNewPassowrd = async () => {
    setLoading(true);
    const body = {
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
    };

    console.log("Signup body ===== > ", body);
    if (body.password.length < 8 || body.password !== body.confirmPassword) {
      alert(
        "Invalid Credential! Please check your email has @ and password should be 8 or greater than 8 characters"
      );
      setLoading(false);
    } else {
      try {
        const userId = await AsyncStorage.getItem("USER_ID");

        let response = await Update_Password(userId, body);
        console.log("response ==== > ", response);
        Toast.show(response.message, Toast.LONG);
        navigation.navigate("login");
        await AsyncStorage.clear();
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
              <Text style={styles.loginTitleText}>Create New Password</Text>
              <View style={styles.hr}></View>

              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordInputContainer}>
                  <TextInput
                    placeholder="Password"
                    style={[
                      styles.input,
                      {
                        borderColor:
                          passwordValue !== confirmPasswordValue
                            ? Colors.red
                            : Colors.green,
                      },
                    ]}
                    autoCapitalize="none"
                    secureTextEntry={secureTextEntryPasssword}
                    value={passwordValue}
                    onChangeText={(text) => setPasswordValue(text)}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setSecureTextEntryPassword(!secureTextEntryPasssword);
                    }}
                    style={styles.eyeIconContainer}
                  >
                    <FontAwesome
                      name={secureTextEntryPasssword ? "eye-slash" : "eye"}
                      size={18}
                      color={Colors.black}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <View style={styles.passwordInputContainer}>
                  <TextInput
                    placeholder="Confirm Password"
                    style={[
                      styles.input,
                      {
                        borderColor:
                          passwordValue !== confirmPasswordValue
                            ? Colors.red
                            : Colors.green,
                      },
                    ]}
                    autoCapitalize="none"
                    secureTextEntry={secureTextEntryConfirmPasssword}
                    value={confirmPasswordValue}
                    onChangeText={(text) => setConfirmPasswordValue(text)}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setSecureTextEntryConfirmPasssword(
                        !secureTextEntryConfirmPasssword
                      );
                    }}
                    style={styles.eyeIconContainer}
                  >
                    <FontAwesome
                      name={
                        secureTextEntryConfirmPasssword ? "eye-slash" : "eye"
                      }
                      size={18}
                      color={Colors.black}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                text={"Update Password"}
                color={Colors.white}
                fontSize={20}
                height={50}
                width={"100%"}
                marginTop={30}
                backgroundColor={Colors.dangerColor}
                borderColor={Colors.dangerColor}
                marginBottom={10}
                fontWeight={"bold"}
                onPress={onHandleCreateNewPassowrd}
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

export default CreateNewPassswordScreen;
