// PhoneNumberInput.js

import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native";
import PhoneInput from "react-native-phone-number-input";

import { useIsFocused, useFocusEffect } from "@react-navigation/native";
import { Colors } from "../utilis/colors";
const PhoneNumberInput = ({ value, onChangeText, placeholder }) => {
  //   const phoneNo = signupValues.phone !== "" ? signupValues.phone.slice(3) : "";
  //   const isFocused = useIsFocused();
  const phoneNumberInput = useRef(null);
  const [formattedValue, setFormattedValue] = useState("");
  const [countryCode, setCountryCode] = useState("PK");
  //   useEffect(() => {
  //     if (signupValues.phone !== "") {
  //       const extractedCountryCode = signupValues.phone.substring(0, 3);
  //       if (extractedCountryCode) {
  //         setCountryCode(extractedCountryCode);
  //         const nationalNumber = signupValues.phone.slice(3);
  //         setFormattedValue(nationalNumber);
  //       } else {
  //         setCountryCode("US");
  //       }
  //     } else {
  //       setCountryCode("US");
  //     }
  //   }, [isFocused, signupValues.phone]);
  const handleOnChangeText = (text) => {
    const countryCode = phoneNumberInput.current?.state?.code;

    // Remove the country code from the entered text
    const nationalNumber = text.startsWith(`+${countryCode}`)
      ? text.slice(countryCode.length + 1)
      : text;

    const formattedPhoneNumber = `+${countryCode || ""}${nationalNumber || ""}`;
    setFormattedValue(text);
    onChangeText(formattedPhoneNumber);
  };
  return (
    <View
      style={{
        borderRadius: 15,
      }}
    >
      <PhoneInput
        ref={phoneNumberInput}
        defaultValue={formattedValue}
        defaultCode={countryCode}
        layout="second"
        onChangeText={handleOnChangeText}
        autoFocus={false}
        placeholder={placeholder}
        countryPickerButtonStyle={{ width: 60 }}
        containerStyle={{
          backgroundColor: Colors.gray,
          width: "100%",
          height: 45,
          borderRadius: 4,
          paddingHorizontal: 5,
        }}
        textContainerStyle={{
          backgroundColor: Colors.gray,
          width: "100%",
          borderRadius: 4,
          height: 45,
        }}
        textInputStyle={{
          color: Colors.black,
          height: 45,
          borderRadius: 4,
          padding: 10,
        }}
        textInputProps={{
          fontSize: 16,
        }}
      />
    </View>
  );
};

export default PhoneNumberInput;
