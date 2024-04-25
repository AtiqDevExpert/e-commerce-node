import { Dimensions, StyleSheet } from "react-native";
import sizeHelper from "../../utilis/sizeHelper";
import { Colors } from "../../utilis/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 10,
  },
  header: {
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignContent: "center",
  },
  paymentTitle: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
    marginVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  cartContainer: {
    flex: 1,
    backgroundColor: "#fff",
    // borderTopLeftRadius: 40,
    // borderTopRightRadius: 40,
    paddingTop: 30,
    paddingHorizontal: 16,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  cartTitleView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#000",
  },
  cartTitle: {
    fontSize: 26,
    fontWeight: "700",
    marginLeft: 10,
    color: "#000",
  },
  productView: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.dangerColor,

    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 10,
    padding: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  productMiddleView: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: Colors.dangerColor,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.white,
  },
  productCompanyTitle: {
    fontSize: 16,
    fontWeight: "300",
    color: Colors.white,
  },
  productRightView: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  productItemCounterView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    alignSelf: "center",
  },
  counterValue: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.white,
  },
  productPriceText: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.white,
  },
  toggleCounterButton: {
    paddingHorizontal: 12,
  },

  totalView: {
    flexDirection: "row",

    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.white,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "300",
    color: Colors.white,
  },

  emptyCartView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartViewText: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
    color: Colors.white,
  },
  categoryImage: {
    height: sizeHelper.calHp(80),
    width: sizeHelper.calWp(80),

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: 'white',
  },
  //

  carouselItem: {
    borderRadius: 5,

    marginVertical: 12,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 10,
    top: 10,
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
});
export default styles;
