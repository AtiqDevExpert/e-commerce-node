import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Toast from "react-native-root-toast";
import { Colors } from "../../utilis/colors";
import styles from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Button from "../../components/Button";
import FastImage from "react-native-fast-image";
import Loading from "../../components/Loading";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import {
  resend_Otp,
  verify_Otp_new_password,
  verify_Otp_register,
} from "../../utilis/api/Requests";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CELL_COUNT = 4;
const OtpScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [loading, setLoading] = useState(false);

  const onHandleVerifyOtp = async () => {
    const body = {
      otp: value,
    };
    if (body.otp.length > 0) {
      setLoading(true);
      const data = await AsyncStorage.getItem("ROUTE_INFO");
      const finalData = JSON.parse(data);
      console.log("verify_Otp===== > ", finalData);

      try {
        if (finalData.route === "register") {
          const id = finalData.userID;
          const response = await verify_Otp_register(id, body);
          console.log("response ==== > ", response);
          Toast.show(response.message, Toast.LONG);
          navigation.navigate("login");
          AsyncStorage.removeItem("ROUTE_INFO");
          setLoading(false);
        } else {
          const userID = finalData?.userID;
          const response = await verify_Otp_new_password(userID, body);
          console.log("response ==== > ", response);
          Toast.show(response.message, Toast.LONG);
          navigation.navigate("createPassword");
          AsyncStorage.removeItem("ROUTE_INFO");
          AsyncStorage.setItem("USER_ID", response.id);

          setLoading(false);
        }
      } catch (error) {
        console.error("Error signing up:", error);
        Toast.show(error.message, Toast.LONG);
        setLoading(false);
      }
    } else {
      Toast.show("Please Enter Otp", Toast.LONG);
      setLoading(false);
    }
  };
  const onHandleResendOtp = async () => {
    setLoading(true);

    const data = await AsyncStorage.getItem("ROUTE_INFO");
    const finalData = JSON.parse(data);
    console.log("finalData ==== > ", finalData);
    try {
      const userID = finalData.userID;
      let response = await resend_Otp(userID);
      console.log("response ==== > ", response);
      Toast.show(response.message, Toast.LONG);

      setLoading(false);
    } catch (error) {
      console.error("Error verify up:", error);
      Toast.show(error.message, Toast.LONG);
      setLoading(false);
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
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <Text style={styles.loginTitleText}>OTP Verification</Text>
              <View style={styles.hr}></View>

              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                autoComplete={Platform.select({
                  android: "sms-otp",
                  default: "one-time-code",
                })}
                testID="my-code-input"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Button
                  text={"Verify"}
                  color={Colors.white}
                  fontSize={20}
                  height={50}
                  width={"100%"}
                  marginTop={30}
                  backgroundColor={Colors.dangerColor}
                  borderColor={Colors.dangerColor}
                  marginBottom={10}
                  fontWeight={"bold"}
                  onPress={onHandleVerifyOtp}
                />

                <TouchableOpacity onPress={onHandleResendOtp}>
                  <Text style={styles.registerText}>
                    Didn’t Get?{" "}
                    <Text style={[styles.registerText, { color: "#ff4757" }]}>
                      {" " + `Resend again`}
                    </Text>
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

export default OtpScreen;
