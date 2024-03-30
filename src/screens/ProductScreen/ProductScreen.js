import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import items from "./ProductList";
import SwiperFlatListItem from "./ProductList";
import styles from "./style";
import { SwiperFlatList } from "react-native-swiper-flatlist";
const ProductScreen = () => {
  const navigation = useNavigation();
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
            showPagination
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
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        numColumns={1}
        data={items}
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
    </SafeAreaView>
  );
};
export default ProductScreen;
