import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import { fetchAllProducts } from "../../redux/slices/product";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";
import Loading from "../../components/Loading";
import Headers from "../../components/Header";
import Toast from "react-native-root-toast";
import FastImage from "react-native-fast-image";
import { fetchAllCategories } from "../../redux/slices/categories";
import SearchBar from "../../components/SearchBar";
import { Colors } from "../../utilis/colors";

const HomeScreen = () => {
  const products = useSelector((state) => state.product?.data);
  const userData = useSelector((state) => state?.loginUser?.data?.user);
  const productCategories = useSelector(
    (state) => state?.productsCategories?.data?.Categories
  );
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      try {
        dispatch(fetchAllProducts(userData?.token));
        dispatch(fetchAllCategories());
      } catch (error) {
        console.error("Error signing up:", error);
        Toast.show(products.errorMessage, Toast.LONG);
      }
    }, [])
  );

  const navigation = useNavigation();
  const onClearFilter = () => {
    if (searchText.length > 0 || selectedCategory.length > 0) {
      setSelectedCategory("");
      setSearchText("");
    }
  };
  const fun = (item) => {
    navigation.navigate("Detail", { item });
  };
  const flatListHeader = () => {
    return (
      <View>
        <View>
          <FlatList
            horizontal={true}
            data={productCategories.filter((product) =>
              product?.name.includes(searchText)
            )}
            renderItem={({ item }) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setSelectedCategory(item.name);
                    setSearchText(item.name);
                  }}
                >
                  <View style={styles.carouselItem}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: Colors.dangerColor,
                        fontWeight: "700",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
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
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                top: Platform.OS === "ios" ? 35 : 0,
              }}
            >
              <Headers />
              <View
                style={{
                  marginVertical: 10,
                }}
              >
                <SearchBar
                  search={searchText}
                  setSearch={setSearchText}
                  onClearFilter={onClearFilter}
                />
              </View>
            </View>

            <View
              style={{
                marginVertical: 20,
                flex: 1,
              }}
            >
              <FlatList
                horizontal={false}
                numColumns={3}
                data={products?.products.filter(
                  (product) =>
                    product?.productName.includes(
                      searchText || selectedCategory
                    ) ||
                    product?.productPrice
                      .toString()
                      .includes(searchText || selectedCategory) ||
                    product?.productCategory.includes(
                      searchText || selectedCategory
                    )
                )}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                  return (
                    <TouchableWithoutFeedback onPress={() => fun(item)}>
                      <View style={styles.flatlItem}>
                        <FastImage
                          style={styles.flatImage}
                          source={{ uri: item?.productImage }}
                          resizeMode={FastImage.resizeMode.contain}
                        />
                        <View
                          style={{
                            justifyContent: "center",
                          }}
                        >
                          <Text>{`${item.productName}`}</Text>

                          <Text>{`PKR : ${item.productPrice}`}</Text>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                }}
                ListHeaderComponent={flatListHeader}
              />
            </View>
          </View>
        </View>
        {products?.isLoading && <Loading />}
      </View>
    </View>
  );
};
export default HomeScreen;
