import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../utilis/colors";
import sizeHelper from "../../utilis/sizeHelper";

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
    width: "100%",
    top: Platform.OS === "android" ? 25 : 25,
  },
  authBox: {
    width: "95%",
    backgroundColor: "#fafafa",
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
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  hr: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#444",
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
    padding: 5,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#dfe4ea",
    borderRadius: 4,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "#dfe4ea",
  },
  loginButton: {
    backgroundColor: "#ff4757",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  registerText: {
    textAlign: "center",

    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 16,
  },

  ModalView: {
    backgroundColor: "#fff",
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  ModalBtnView: {
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
    justifyContent: "space-evenly",
  },

  modalIcon: {
    width: 18,
    height: 18,
    position: "absolute",
    right: 0,
    top: 0,
  },
  image: { width: 80, height: 80, borderRadius: 100 },
  imageBox: {
    flexDirection: "row-reverse",
    marginHorizontal: 10,
  },
  touchable: {
    marginTop: -10,
    height: 15,
    marginLeft: -10,
  },
  imageContainer: {
    justifyContent: "center",
  },

  coverView: {
    backgroundColor: Colors.white,
    height: 80,
    width: 80,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.hiddenText,

    justifyContent: "center",
    alignItems: "center",
  },
  touch1: {
    justifyContent: "center",
    alignItems: "center",
  },
  uploadIcon: { height: 30, width: 30 },

  crossRedIcon: {
    height: 30,
    width: 30,
    bottom: 18,
    marginRight: -12,
  },
  crossRedIcon2: {
    height: 30,
    width: 30,
    // top: 5,
    marginRight: -16,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  eyeIconContainer: {
    position: "absolute",
    right: 0,
    paddingRight: 10,
  },
  carouselItem: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: "row",
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainView3: {
    marginVertical: 10,
  },
  categoryImage: {
    height: sizeHelper.calHp(40),
    width: sizeHelper.calWp(40),

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: 'white',
  },
});
export default styles;
