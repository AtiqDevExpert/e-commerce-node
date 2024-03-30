import React, { useState, useEffect } from "react";
import { Radio } from "native-base";
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
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Button from "../../component/Button/button";
import styles from "./style";
import { useSelector } from "react-redux";
const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([
    {
      id: "1",
      name: "Wired Mouse",
      company: "Logitech",
      img: "https://assets.logitech.com/assets/65019/3/mouton-boat-m90-refresh-gallery-image.png",
      quantity: 1,
      price: 299,
      perPrice: 299,
    },
    {
      id: "2",
      name: "Airpods",
      company: "Apple",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489688005",
      quantity: 1,
      price: 13999,
      perPrice: 13999,
    },
  ]);
  const [shippingMethod, setShippingMethod] = useState("Normal");
  const dummy = () => {
    itemsArray = [
      ["Anne", "a"],
      ["Bob", "b"],
      ["Henry", "b"],
      ["Andrew", "d"],
      ["Jason", "c"],
      ["Thomas", "b"],
    ];
    sortingArr = ["b", "c", "b", "b", "a", "d"];
    function sortFunc(a, b) {
      var sortingArr = ["b", "c", "b", "b", "c", "d"];
      return sortingArr.indexOf(a[1]) - sortingArr.indexOf(b[1]);
    }

    let result = itemsArray.sort(sortFunc);
    console.log(result);
  };
  useEffect(() => {
    dummy();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            paddingRight: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome5 name="angle-left" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.paymentTitle}>Payment</Text>
      </View>
      <View style={styles.cartContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cartTitleView}>
            <FontAwesome5
              name="shopping-cart"
              style={styles.cartIcon}
              size={30}
              color="#000"
            />
            <Text style={styles.cartTitle}>My Cart</Text>
          </View>
          {cart.length > 0 ? (
            <View>
              {cart
                .sort((a, b) => a.name > b.name)
                .map((product) => (
                  <View style={styles.productView}>
                    {console.log(product)}
                    <Image
                      style={styles.productImage}
                      source={{
                        uri: product.img,
                      }}
                    />
                    <View style={styles.productMiddleView}>
                      <Text style={styles.productTitle}>{product.name}</Text>
                      <Text style={styles.productCompanyTitle}>
                        {product.company}
                      </Text>
                    </View>
                    <View style={styles.productRightView}>
                      <Text
                        style={styles.productPriceText}
                      >{`PKR-${product.price}`}</Text>
                      <View style={styles.productItemCounterView}>
                        <TouchableOpacity
                          onPress={() => {
                            if (product.quantity === 1) {
                              return Alert.alert(
                                `Remove ${product.name}?`,
                                "",
                                [
                                  { text: "Cancel" },
                                  {
                                    text: "Remove",
                                    onPress: () => {
                                      const newCart = CartList.filter(
                                        (p) => p.id !== product.id
                                      );
                                      setCart(newCart);
                                    },
                                  },
                                ]
                              );
                            }
                            const newProd = {
                              ...product,
                              quantity: product.quantity - 1,
                              price: product.price - product.perPrice,
                            };
                            const restProds = CartList.filter(
                              (p) => p.id !== product.id
                            );
                            setCart([...restProds, newProd]);
                          }}
                        >
                          <FontAwesome5
                            style={styles.toggleCounterButton}
                            name="minus-circle"
                            size={20}
                            color={"#000"}
                          />
                        </TouchableOpacity>

                        <Text style={styles.counterValue}>
                          {product.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            const newProd = {
                              ...product,
                              quantity: product.quantity + 1,
                              price: product.price + product.perPrice,
                            };
                            const restProds = cart.filter(
                              (p) => p.id !== product.id
                            );
                            setCart([...restProds, newProd]);
                          }}
                        >
                          <FontAwesome5
                            style={styles.toggleCounterButton}
                            name="plus-circle"
                            size={20}
                            color="#000"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))}
              <View style={styles.couponInputView}>
                <TextInput
                  placeholder="Coupon Code"
                  style={styles.couponInput}
                  placeholderTextColor={"#000"}
                />
                <TouchableOpacity style={styles.couponButton}>
                  <Text style={styles.couponButtonText}>Apply Coupon</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.subtotalView}>
                <Text style={styles.subtotalText}>Subtotal -</Text>
                <Text style={styles.subtotalPrice}>
                  PKR-{cart.reduce((acc, val) => val.price + acc, 0)}
                </Text>
              </View>
              <View style={styles.shippingView}>
                <Text style={styles.shippingText}>Shipping Address -</Text>
                <View style={styles.shippingItemsView}>
                  <TouchableOpacity
                    style={styles.shippingItem}
                    onPress={() => {
                      setShippingMethod("Normal");
                    }}
                  >
                    <Text style={styles.shippingItemText}>Normal (Free)</Text>
                    <Radio
                      color="#000"
                      selected={shippingMethod === "Normal"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.shippingItem}
                    onPress={() => {
                      setShippingMethod("Express");
                    }}
                  >
                    <Text style={styles.shippingItemText}>
                      Urgetn (PKR-600)
                    </Text>
                    <Radio
                      color="#000"
                      selected={shippingMethod === "Express"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.totalView}>
                <Text style={styles.totalText}>Total -</Text>
                {shippingMethod === "Normal" ? (
                  <Text style={styles.totalPrice}>
                    PKR-{cart.reduce((acc, val) => val.price + acc, 0)}
                  </Text>
                ) : (
                  <Text style={styles.totalPrice}>
                    PKR-{cart.reduce((acc, val) => val.price + acc, 0) + 60}
                  </Text>
                )}
              </View>
              <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>
                  Proceed to Checkout
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.emptyCartView}>
              <Text style={styles.emptyCartViewText}>Your cart is empty.</Text>
              <View style={{ marginVertical: 10 }}>
                <Button
                  onPress={() => navigation.navigate("Home")}
                  text={"Add to Cart"}
                  color={"#FFF"}
                  fontSize={20}
                  height={40}
                  width={150}
                  borderWidth={1}
                  backgroundColor={"#000"}
                />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default CartScreen;
