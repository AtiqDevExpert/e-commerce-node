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
import { SignUp_Request } from "../../utilis/api/Requests";
import AsyncStorage from "@react-native-async-storage/async-storage";
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [selecter, setSelecter] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [secureTextEntryPasssword, setSecureTextEntryPassword] = useState(true);
  const [secureTextEntryConfirmPasssword, setSecureTextEntryConfirmPasssword] =
    useState(true);
  const backToLogin = () => {
    navigation.navigate("login");
  };
  const onHandleSignup = async () => {
    setLoading(true);
    const body = {
      name: name,
      phone: phoneNumber,
      role: "user",
      email: emailValue,
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
      profilePicture: image,
    };

    console.log("Signup body ===== > ", body);
    if (
      !body.email.includes("@") ||
      body.password.length < 8 ||
      body.password !== body.confirmPassword
    ) {
      alert(
        "Invalid Credential! Please check your email has @ and password should be 8 or greater than 8 characters"
      );
      setLoading(false);
    } else {
      try {
        let response = await SignUp_Request(body);
        console.log("response ==== > ", response);
        const data = {
          userID: response.id,
          route: "register",
        };
        await AsyncStorage.setItem("ROUTE_INFO", JSON.stringify(data));
        Toast.show("User Registered Successfully", Toast.LONG);

        navigation.navigate("otp");
        setLoading(false);
      } catch (error) {
        console.error("Error signing up:", error);
        Toast.show(error.message, Toast.LONG);
        setLoading(false);
      }
    }
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(async (image) => {
      if (selecter === false) {
        setVisible(false);
        setLoading(true);
        const result = await firebaseUploader(image);
        setImage(result);
        setSelecter(false);
        setLoading(false);
      } else {
        setVisible(false);
        setSelecter(false);
        setLoading(false);
      }
    });
  };
  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(async (image) => {
      if (selecter === false) {
        setVisible(false);
        setLoading(true);
        const result = await firebaseUploader(image);
        setImage(result);
        setSelecter(false);
        setLoading(false);
      } else {
        setVisible(false);
        setSelecter(false);
        setLoading(false);
      }
    });
  };
  const onClear = () => {
    setImage(null);
    setSelecter(false);
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
                {!image ? (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.coverView}>
                      <TouchableOpacity
                        style={styles.touch1}
                        onPress={() => setVisible(true)}
                      >
                        <UploadIcon style={styles.uploadIcon} />
                        <Text
                          style={{
                            color: "black",
                            justifyContent: "center",
                            alignItems: "center",
                            color: Colors.dark,
                          }}
                        >
                          Upload
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <View style={styles.coverView}>
                      <View style={styles.imageBox}>
                        <TouchableOpacity
                          onPress={onClear}
                          style={styles.touchable}
                        >
                          <CrossRedIcon style={styles.crossRedIcon2} />
                        </TouchableOpacity>
                        <View style={styles.imageContainer}>
                          <FastImage
                            source={{ uri: image }}
                            resizeMode={FastImage.resizeMode.stretch}
                            style={styles.image}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              </View>
              <Text style={styles.loginTitleText}>Register</Text>
              <View style={styles.hr}></View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Full Name</Text>
                <TextInput
                  placeholder="Full name"
                  value={name}
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={(text) => setName(text)}
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Phone</Text>
                <PhoneNumberInput
                  placeholder="Enter Phone"
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
                />
              </View>
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
                text={"Register"}
                color={Colors.white}
                fontSize={20}
                height={50}
                width={"100%"}
                marginTop={30}
                backgroundColor={Colors.dangerColor}
                borderColor={Colors.dangerColor}
                marginBottom={10}
                fontWeight={"bold"}
                onPress={onHandleSignup}
              />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <Text style={styles.registerText}>
                  Already have an account ?
                </Text>
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

          {!!visible && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Modal isVisible={visible}>
                <View style={styles.ModalView}>
                  <TouchableOpacity
                    onPress={() => setVisible(false)}
                    style={styles.modalIcon}
                  >
                    <CrossRedIcon style={styles.crossRedIcon} />
                  </TouchableOpacity>
                  <Text style={{ color: Colors.modalTextColor }}>
                    Click your desired Button
                  </Text>
                  <View style={styles.ModalBtnView}>
                    <Button
                      text={"Open camera"}
                      color={Colors.white}
                      fontSize={15}
                      height={45}
                      width={"40%"}
                      marginTop={30}
                      backgroundColor={Colors.dangerColor}
                      borderColor={Colors.dangerColor}
                      marginBottom={10}
                      onPress={takePhotoFromCamera}
                    />

                    <Button
                      text={"Open Gallery"}
                      color={Colors.white}
                      fontSize={15}
                      height={45}
                      width={"40%"}
                      marginTop={30}
                      backgroundColor={Colors.dangerColor}
                      borderColor={Colors.dangerColor}
                      marginBottom={10}
                      onPress={takePhotoFromGallery}
                    />
                  </View>
                </View>
              </Modal>
            </View>
          )}
          {loading && <Loading />}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
