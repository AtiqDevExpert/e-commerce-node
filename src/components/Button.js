import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const Button = ({
  disabled,
  text,
  marginBottom,
  fontWeight,
  fontSize,
  backgroundColor,
  onPress,
  marginTop,
  color,
  elevation,
  flex,
  height,
  width,
  borderWidth,
  marginVertical,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        marginBottom: marginBottom,
        flex: flex,
        alignSelf: "center",
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
        height: height,
        width: width,
        borderRadius: 30,
        justifyContent: "center",
        marginTop: marginTop,
        elevation: elevation,
        borderColor: "#000",
        marginVertical: marginVertical,
      }}
    >
      <Text
        style={{
          color: color,
          fontSize: fontSize,
          textAlign: "center",
          fontWeight: fontWeight,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
