import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Colors } from "../utilis/colors";

const Loading = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.popUpBackgroundColor,
        zIndex: 9999,
      }}
    >
      <View
        style={{
          margin: 20,
          width: 200,
          height: 70,
          backgroundColor: Colors.white,
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: Colors.black,

              marginRight: 5,
            }}
          >
            Please Wait
          </Text>
          <ActivityIndicator
            size="small"
            color={Colors.black}
            animating={true}
          />
        </View>
      </View>
    </View>
  );
};
export default Loading;
