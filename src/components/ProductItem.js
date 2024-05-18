import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  I18nManager,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import FastImage from "react-native-fast-image";
import { Colors } from "../utilis/colors";
import sizeHelper from "../utilis/sizeHelper";
const ProductItem = ({ item }) => {
  return (
    <View
      style={[
        styles.mainContainer,
        {
          borderColor: Colors.dangerColor,
        },
      ]}
    >
      {item.productImage ? (
        <FastImage
          source={{ uri: item?.productImage }}
          style={styles.categoryImage}
          resizeMode={FastImage.resizeMode.contain}
        />
      ) : (
        <View style={styles.categoryImage}>
          <Icon
            name="file-image-o"
            size={sizeHelper.calWp(50)}
            color={Colors.black2}
          />
        </View>
      )}
      <Text adjustsFontSizeToFit numberOfLines={2} style={styles.title}>
        Qty:
        {item?.productSellQuantity
          ? item?.productRemainingQuantity
          : item.productTotalQuantity}
      </Text>
      <Text adjustsFontSizeToFit numberOfLines={2} style={styles.title}>
        {item.productName}
      </Text>

      <Text numberOfLines={1} style={styles.price}>
        PKR-{item?.productPrice.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: sizeHelper.calHp(200),
    width:
      sizeHelper.screenWidth > 450
        ? sizeHelper.screenWidth / 4 - sizeHelper.calWp(20)
        : sizeHelper.screenWidth / 3 - sizeHelper.calWp(28),
    paddingTop: sizeHelper.calHp(20),
    paddingBottom: sizeHelper.calHp(12),
    borderRadius: sizeHelper.calWp(5),
    paddingHorizontal: sizeHelper.calWp(5),
    borderWidth: 1,

    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: sizeHelper.calWp(10),

    backgroundColor: Colors.white,
  },
  categoryImage: {
    height: sizeHelper.calHp(80),
    width: sizeHelper.calWp(155),

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: 'white',
  },
  title: {
    marginTop: sizeHelper.calHp(8),
    fontSize: sizeHelper.calHp(15),
    color: Colors.black,
    textAlign: "center",
  },
  price: {
    marginTop: sizeHelper.calHp(8),
    fontSize: sizeHelper.calHp(16),
    color: Colors.black,

    fontWeight: "bold",
  },
  selectedItemIcon: {
    position: "absolute",
    height: sizeHelper.calHp(35),
    width: sizeHelper.calWp(35),
    resizeMode: "cover",
    //backgroundColor: 'green',
    bottom: -1,

    alignSelf: "flex-start",

    //transform: [I18nManager.isRTL ? {rotateY: '180deg'} : {rotate: '0deg'}],
  },
});

export default ProductItem;
