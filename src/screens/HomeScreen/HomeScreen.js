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
import { fetchAllCategories } from "../../redux/slices/categories";
import SearchBar from "../../components/SearchBar";
import { Colors } from "../../utilis/colors";
import ProductItem from "../../components/ProductItem";
import sizeHelper from "../../utilis/sizeHelper";
import {
  fetchProductsCategories,
  fetchProductsData,
} from "../../redux/actions/allProductsAction";
import { addToCart } from "../../redux/actions/cart";

const HomeScreen = () => {
  const navigation = useNavigation();
  const state = useSelector((state) => state);

  const products = useSelector((state) => state?.data?.allProducts?.products);
  const categories = useSelector(
    (state) => state?.data?.allCategories?.Categories
  );

  const userData = useSelector((state) => state?.data?.userData?.user);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );
  const fetchData = async () => {
    try {
      await dispatch(fetchProductsData(userData?.token));
      await dispatch(fetchProductsCategories());
    } catch (error) {
      console.error("Error fetching products up:", error);
      Toast.show(products.errorMessage, Toast.LONG);
    }
  };

  const onClearFilter = () => {
    if (searchText.length > 0 || selectedCategory.length > 0) {
      setSelectedCategory("");
      setSearchText("");
    }
  };

  const flatListHeader = () => {
    return (
      <View>
        <View>
          <FlatList
            horizontal={true}
            data={categories}
            keyExtractor={(item, index) => index + item._id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setSelectedCategory(item?.name);
                    setSearchText(item?.name);
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

  const renderProductItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => dispatch(addToCart(item))}>
        <View style={styles.renderItem}>
          <ProductItem item={item} />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.mainView}>
            <View style={styles.mainView2}>
              <Headers />
              <View style={styles.mainView3}>
                <SearchBar
                  search={searchText}
                  setSearch={setSearchText}
                  onClearFilter={onClearFilter}
                />
              </View>
            </View>

            <View style={styles.mainView4}>
              <FlatList
                horizontal={false}
                numColumns={sizeHelper.screenWidth > 450 ? 4 : 3}
                data={products?.filter(
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
                keyExtractor={(item, index) => index + item._id.toString()}
                renderItem={renderProductItem}
                ListHeaderComponent={flatListHeader}
              />
            </View>
          </View>
        </View>
        {state?.isLoading && <Loading />}
      </View>
    </View>
  );
};
export default HomeScreen;
