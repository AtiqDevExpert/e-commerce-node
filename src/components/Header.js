import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { Colors } from "../utilis/colors";
import { useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Header = () => {
  const userData = useSelector((state) => state?.data?.userData?.user);
  const cartItems = useSelector((state) => state?.data?.cartItems);
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };
  const navigateToCart = () => {
    navigation.navigate("Cart");
  };
  return (
    <View style={styles.container}>
      <View style={styles.lineView}>
        <View>
          <Text style={styles.welcome}>Welcome to E Store</Text>
          <Text style={styles.name}>{userData.name}</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: 100,
            }}
          >
            <TouchableOpacity
              onPress={navigateToCart}
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <>
                {cartItems.length > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{cartItems.length}</Text>
                  </View>
                )}

                <FontAwesome
                  name={"shopping-cart"}
                  size={25}
                  color={Colors.white}
                />
              </>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touch} onPress={navigateToProfile}>
              <FastImage
                style={styles.image}
                source={{ uri: userData.profilePicture }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dangerColor,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  image: { width: 40, height: 40, borderRadius: 100 },
  lineView: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: { fontSize: 16, color: Colors.white, fontWeight: "700" },
  name: { fontSize: 12, color: Colors.white, fontWeight: "700" },
  badge: {
    position: "absolute",
    top: -12,
    right: -8,
    backgroundColor: Colors.white,
    borderRadius: 50,
    color: Colors.dangerColor,
    // paddingHorizontal: 5,
    // paddingVertical: 2,
    padding: 2,
    height: 20,
    width: 20,
    zIndex: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: Colors.dangerColor,
    top: -3,
    zIndex: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Header;
