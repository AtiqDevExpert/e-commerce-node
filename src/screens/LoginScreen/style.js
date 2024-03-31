import { StyleSheet, Dimensions } from "react-native";

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

    overflow: "hidden",
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
    padding: 5,
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
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: "center",
    marginTop: 14,
    fontSize: 16,
    alignSelf: "flex-end",
  },

  inputLabel: {
    marginBottom: 5,
    color: "#000", // Change the color as needed
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
  image: { width: 80, height: 80, borderRadius: 50 },
  socialview: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-around",
  },
  icon: {
    height: 40,
    width: 40,
    alignSelf: "center",
  },
  or: {
    color: "#08101F",
    fontSize: 15,
    alignSelf: "center",
    paddingHorizontal: 5,
  },
  leftLine: {
    backgroundColor: "#D7DADF",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  rightLine: {
    backgroundColor: "#D7DADF",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  lineView: {
    flexDirection: "row",
    marginTop: 10,
  },
});
export default styles;
