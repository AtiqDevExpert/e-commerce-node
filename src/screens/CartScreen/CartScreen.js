import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Button from "../../components/Button";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../utilis/colors";
import sizeHelper from "../../utilis/sizeHelper";

import Loading from "../../components/Loading";
import { addToCart, removeFromCart } from "../../redux/actions/cart";
const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.data?.cartItems);
  const state = useSelector((state) => state);
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.productPrice * item.productQuantity;
  }, 0);
  const renderCartProducts = ({ item, index }) => {
    return (
      <View>
        <View style={styles.productView}>
          {item?.productImage ? (
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

          <View style={styles.productMiddleView}>
            <Text style={styles.productTitle}>{item.productName}</Text>
            <Text style={styles.productCompanyTitle}>
              {item.productCategory}
            </Text>
          </View>
          <View style={styles.productRightView}>
            <Text style={styles.productPriceText}>{`PKR-${
              item.productPrice * item.productQuantity
            }`}</Text>
            <View style={styles.productItemCounterView}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeFromCart(item));
                }}
              >
                <FontAwesome5
                  style={styles.toggleCounterButton}
                  name="minus-circle"
                  size={20}
                  color={Colors.white}
                />
              </TouchableOpacity>

              <Text style={styles.counterValue}>{item.productQuantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(addToCart(item));
                }}
              >
                <FontAwesome5
                  style={styles.toggleCounterButton}
                  name="plus-circle"
                  size={20}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.mainView}>
            {cartItems.length > 0 ? (
              <View style={{ flex: 1 }}>
                <View style={styles.mainView4}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cartItems}
                    keyExtractor={(item, index) => index + item._id.toString()}
                    renderItem={renderCartProducts}
                  />
                  <View
                    style={{
                      zIndex: 999999,
                    }}
                  >
                    <View style={styles.totalView}>
                      <Text style={styles.totalText}>Total -</Text>

                      <Text style={styles.totalPrice}>
                        PKR-
                        {totalPrice}
                      </Text>
                    </View>
                    <Button
                      text={"Checkout"}
                      color={Colors.white}
                      fontSize={20}
                      height={50}
                      width={"100%"}
                      marginVertical={20}
                      backgroundColor={Colors.dangerColor}
                      borderColor={Colors.dangerColor}
                      fontWeight={"bold"}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles.emptyCartView}>
                <Text style={styles.emptyCartViewText}>
                  Your cart is empty.
                </Text>
                <View style={{ marginVertical: 10 }}>
                  <Button
                    onPress={() => navigation.navigate("Home")}
                    text={"Add to Cart"}
                    color={"#FFF"}
                    fontSize={20}
                    height={40}
                    width={150}
                    borderWidth={1}
                    backgroundColor={Colors.dangerColor}
                    borderColor={Colors.dangerColor}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
        {state?.isLoading && <Loading />}
      </View>
    </View>
    // <>

    // <SafeAreaView style={styles.container}>
    //       <View style={styles.cartContainer}>
    //         <ScrollView showsVerticalScrollIndicator={false}>
    //           {cartItems.length > 0 ? (
    //             <View>
    //               {cartItems
    //                 .sort((a, b) => a.productName > b.productName)
    //                 .map((product) => (

    //                 ))}

    //               <View style={styles.shippingView}>
    //                 <Text style={styles.shippingText}>Shipping Address -</Text>
    //               </View>
    //               <View style={styles.totalView}>
    //                 <Text style={styles.totalText}>Total -</Text>

    //                 <Text style={styles.totalPrice}>
    //                   PKR-{cart.reduce((acc, val) => val.price + acc, 0)}
    //                 </Text>
    //               </View>
    //               <TouchableOpacity style={styles.checkoutButton}>
    //                 <Text style={styles.checkoutButtonText}>
    //                   Proceed to Checkout
    //                 </Text>
    //               </TouchableOpacity>
    //             </View>
    //           ) : (
    //             <View style={styles.emptyCartView}>
    //               <Text style={styles.emptyCartViewText}>Your cart is empty.</Text>
    //               <View style={{ marginVertical: 10 }}>
    //                 <Button
    //                   onPress={() => navigation.navigate("Home")}
    //                   text={"Add to Cart"}
    //                   color={"#FFF"}
    //                   fontSize={20}
    //                   height={40}
    //                   width={150}
    //                   borderWidth={1}
    //                   backgroundColor={"#000"}
    //                 />
    //               </View>
    //             </View>
    //           )}
    //         </ScrollView>
    //       </View>
    //     </SafeAreaView></>
  );
};
export default CartScreen;
