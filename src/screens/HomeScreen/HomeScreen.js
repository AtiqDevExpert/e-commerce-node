import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";

import styles from "./style";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Loading from "../../components/Loading";
import { Get_All_Products } from "../../utilis/api/Requests";
import AsyncStorage from "@react-native-async-storage/async-storage";
const HomeScreen = () => {
  useEffect(() => {
    onHandleGetAllProducts();
  }, []);
  const [loading, setLoading] = useState(false);
  const ProductList = [
    {
      id: "1",
      company: "Apple",
      img: require("./images/airpods.jpg"),
      price: "2000",
      perPrice: "2000",
      name: "Airpods Wireless Bluetooth Headphones",
      Detail:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working ",
    },
    {
      id: "2",
      company: "Echo",
      img: require("./images/alexa.jpg"),
      price: "2000",
      perPrice: "2000",
      name: "Amazon Echo Dot 3rd Generation",
      Detail:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space ",
    },
  ];
  const SwiperFlatListItem = [
    {
      img: require("./images/airpods.jpg"),
      price: "PKR-2000",
      name: "Airpods Wireless Bluetooth Headphones",
      Detail:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working ",
    },
    {
      img: require("./images/alexa.jpg"),
      price: "PKR-2000",
      name: "Amazon Echo Dot 3rd Generation",
      Detail:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space ",
    },
    {
      img: require("./images/camera.jpg"),
      price: "PKR-2000",
      name: "Cannon EOS 80D DSLR",
      Detail:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design ",
    },
    {
      img: require("./images/mouse.jpg"),
      price: "PKR-2000",
      name: "Logitech G-Series Gaming Mouse",
      Detail:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience ",
    },
    {
      img: require("./images/phone.jpg"),
      price: "PKR-2000",
      name: "IPHONE 13 PRO MAX",
      Detail:
        "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life ",
    },
    {
      img: require("./images/playstation.jpg"),
      price: "PKR-2000",
      name: "Sony Playstation 4 Pro White Version",
      Detail:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music ",
    },
  ];
  const navigation = useNavigation();
  const onHandleGetAllProducts = async () => {
    setLoading(true);

    try {
      const token = await AsyncStorage.getItem("USER_TOKEN");
      let response = await Get_All_Products(token);
      console.log("response ==== > ", response);

      setLoading(false);
    } catch (error) {
      console.error("Error signing up:", error);
      Toast.show(error.message, Toast.LONG);
      setLoading(false);
    }
  };
  const fun = (item) => {
    navigation.navigate("Detail", { item });
  };
  const flatListHeader = () => {
    return (
      <View>
        <Text style={styles.header}>Latest Products</Text>
        <View>
          <SwiperFlatList
            autoplay
            autoplayDelay={1}
            autoplayLoop
            index={1}
            // showPagination
            paginationActiveColor={"#000"}
            data={SwiperFlatListItem}
            renderItem={({ item }) => {
              return (
                <TouchableWithoutFeedback onPress={() => fun(item)}>
                  <View style={styles.carouselItem}>
                    <Image style={styles.imageView} source={item.img} />
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
        <Text style={styles.headerMore}>More Products</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View>
            <FlatList
              horizontal={false}
              numColumns={1}
              data={ProductList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <TouchableWithoutFeedback onPress={() => fun(item)}>
                    <View style={styles.flatlItem}>
                      <Image style={styles.flatImage} source={item.img} />
                      <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              }}
              ListHeaderComponent={flatListHeader}
            />
          </View>
        </View>
        {loading && <Loading />}
      </View>
    </View>
  );
};
export default HomeScreen;
