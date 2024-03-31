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
} from "react-native";
import styles from "./style";
import items from "./ProductList";
import React, { useState, useEffect } from "react";

import { Rating } from "react-native-ratings";

import { useDispatch } from "react-redux";
import Button from "../../components/Button";

const DetailScreen = ({ navigation, route }) => {
  const [item, setItem] = useState(route.params.item);

  const fun = (item) => {
    navigation.navigate("Cart", { item });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={styles.design} source={item.img} />
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <Text style={styles.name}>Price : {item.price}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingName}>Rating : </Text>
          <Rating
            imageSize={15}
            onFinishRating={(rating) => {
              Alert.alert("Star Rating: " + JSON.stringify(rating));
            }}
          />
        </View>
        <Text style={styles.detail}>Discription : {item.Detail}</Text>
        <View>
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              flexDirection: "row",
              marginVertical: 15,
            }}
          >
            <View>
              <Button
                onPress={() => navigation.navigate("HomeScreen")}
                text={"Buy Now"}
                color={"#FFF"}
                fontSize={20}
                height={40}
                width={150}
                borderWidth={1}
                backgroundColor={"#000"}
              />
            </View>
            <View>
              <Button
                text={"Add to Cart"}
                color={"#000"}
                fontSize={20}
                height={40}
                width={150}
                borderWidth={1}
                backgroundColor={"#FFF"}
              />
            </View>
          </View>
          {/* <Text style={styles.headerMore}>More Products</Text>
          <FlatList
            horizontal={true}
            numColumns={1}
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableWithoutFeedback onPress={() => fun(item)}>
                  <View style={styles.flatlItem}>
                    <Image style={styles.flatImage} source={item.img} />
                    <Text style={styles.itemName2}>{item.name}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
