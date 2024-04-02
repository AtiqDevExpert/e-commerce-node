import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

import React, { useState, useEffect } from "react";

import { Rating } from "react-native-ratings";

import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Header from "../../components/Header";
import FastImage from "react-native-fast-image";
import { Colors } from "../../utilis/colors";

const DetailScreen = ({ navigation, route }) => {
  const item = route?.params?.item;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ justifyContent: "center" }}
          >
            <View
              style={{
                top: Platform.OS === "ios" ? 50 : 0,
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <FastImage
                  style={styles.design}
                  source={{ uri: item?.productImage }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  padding: 10,
                }}
              >
                <Text style={styles.itemName}>{item.productName}</Text>
                <Text style={styles.name}>Price : {item.productPrice}</Text>

                <Text style={styles.detail}>Discription :</Text>
                <Text style={styles.detail}>{item.productDescription}</Text>
              </View>
            </View>
          </ScrollView>

          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              marginVertical: 15,
              alignItems: "flex-end",
            }}
          >
            <View>
              <Button
                onPress={() => navigation.navigate("Home")}
                text={"Buy Now"}
                color={Colors.white}
                fontSize={20}
                height={40}
                width={150}
                borderWidth={1}
                backgroundColor={Colors.dangerColor}
                borderColor={Colors.dangerColor}
              />
            </View>
            <View>
              <Button
                text={"Add to Cart"}
                color={Colors.white}
                fontSize={20}
                height={40}
                width={150}
                borderWidth={1}
                backgroundColor={Colors.dangerColor}
                borderColor={Colors.dangerColor}
              />
            </View>
          </View>
        </View>
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
    borderRadius: 20,
    padding: 10,
    backgroundColor: Colors.popUpBackgroundColor,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  name: {
    color: "#000",

    fontSize: 15,
    fontWeight: "bold",
  },
  itemName: {
    color: "#000",

    fontSize: 20,
    fontWeight: "bold",
  },
  detail: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
    paddingHorizontal: 10,
  },
  design: {
    width: Dimensions.get("window").width - 20,
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: Colors.dangerColor2,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginVertical: 5,
  },
  button: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    borderRadius: 100,
    height: 50,
    borderWidth: 1,
    backgroundColor: "trasnparent",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "25%",
    position: "absolute",
    bottom: 10,
  },
  rating: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
  ratingName: {
    color: "#000",
    backgroundColor: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  headerMore: {
    color: "#000",
    fontSize: 30,
    marginHorizontal: 10,
    fontWeight: "bold",
    marginVertical: 5,
  },
  flatlItem: {
    width: 250,
    height: 250,
    borderRadius: 10,
    elevation: 50,
    shadowColor: "#ff0",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginVertical: 10,
    alignSelf: "center",
    marginHorizontal: 5,
    backgroundColor: "#000",
    marginBottom: 25,
  },
  flatImage: { width: 250, height: 250, borderRadius: 10 },
  itemName2: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
  tag: {
    borderRadius: 4,
    backgroundColor: "#FFF",
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    fontFamily: "MontserratBold",
    color: "#333",
  },
  tagSelected: {
    backgroundColor: "#333",
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    fontFamily: "MontserratBold",
    color: "#FFF",
  },
  or: "#FFF",
});
export default DetailScreen;
