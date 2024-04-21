import React from "react";
import {
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Platform,
  Text,
} from "react-native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Settings from "../screens/Setting/Settings";
import CartScreen from "../screens/CartScreen/CartScreen";
import Profile from "../ButtomTab/Profile/profile";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../utilis/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const _renderIcon = (routeName, selectedTab) => {
  let icon = "";

  switch (routeName) {
    case "Home":
      icon = "home";
      break;
    case "Settings":
      icon = "first-order";
      break;
    case "Cart":
      icon = "shopping-cart";
      break;
    case "Profile":
      icon = "users";
      break;
    case "Cart":
      icon = "cart";
      break;
  }
  return (
    <>
      <FontAwesome
        name={icon}
        size={25}
        color={routeName === selectedTab ? Colors.white : Colors.gray}
      />
    </>
  );
};
const renderTabBar = ({ routeName, selectedTab, navigate }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  );
};

const TabScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        initialRouteName="Home"
        strokeWidth={0.5}
        height={65}
        circleWidth={55}
        bgColor={Colors.dangerColor}
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
              }}
              onPress={() => navigate("createProduct")}
            >
              <Ionicons name={"apps-sharp"} color="gray" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="Home"
          position="LEFT"
          component={HomeScreen}
        />

        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  img: {
    width: 30,
    height: 30,
  },
});
export default TabScreen;
