import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../utilis/colors";
import sizeHelper from "../../utilis/sizeHelper";
const styles = StyleSheet.create({
  carouselItem: {
    borderRadius: 5,

    marginVertical: 12,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 10,
    top: 10,
    flexDirection: "row",
  },
  itemName: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  imageView: { width: 100, height: 100, borderRadius: 10 },
  header: {
    color: "#000",
    fontSize: 20,
    // marginHorizontal: 10,
    fontWeight: "bold",
    marginVertical: 10,
    backgroundColor: Colors.white,
    width: 110,
  },

  flatlItem: {
    // width: 128,
    // height: 150,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#ff7979",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginVertical: 10,

    marginHorizontal: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 5,
  },
  flatImage: { width: 80, height: 80 },

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
  authBox: {
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 30,
    flex: 1,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: "#eb4d4b",
    borderRadius: 1000,
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: -50,
    marginBottom: -50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,

    overflow: "hidden",
  },
  mainView: {
    flex: 1,
  },
  mainView2: {
    top: Platform.OS === "ios" ? 50 : 20,
  },
  mainView3: {
    marginVertical: 10,
  },
  mainView4: {
    marginVertical: 10,
    flex: 1,
    top: Platform.OS === "ios" ? 20 : 0,
  },
  renderItem: { marginVertical: 10, marginHorizontal: 5 },
  categoryImage: {
    height: sizeHelper.calHp(40),
    width: sizeHelper.calWp(40),

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: 'white',
  },
});
export default styles;
