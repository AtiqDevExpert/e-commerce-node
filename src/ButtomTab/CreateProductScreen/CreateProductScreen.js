import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  FlatList,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ImagePicker from "react-native-image-crop-picker";
import Toast from "react-native-root-toast";
import { Colors } from "../../utilis/colors";

import { CrossRedIcon, UploadIcon } from "../../assets/svg/SvgIcons";
import styles from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebaseUploader from "../../utilis/firebaseUpload";
import Button from "../../components/Button";
import FastImage from "react-native-fast-image";
import Loading from "../../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { addProductData } from "../../redux/actions/addProductAction";
import SearchBar from "../../components/SearchBar";
import ImageSelectModal from "../../components/ImageSelectModal";
import CategoryModal from "../../components/CategoryModal";
import { addCategoryData } from "../../redux/actions/addCategoryAction";
const CreateProductScreen = ({ navigation }) => {
  const categories = useSelector(
    (state) => state?.data?.allCategories?.Categories
  );
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productTotalQuantity, setProductTotalQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [categoryIndex, setCategoryIndex] = useState();
  const [selecter, setSelecter] = useState(false);
  const [visible, setVisible] = useState(false);
  const [newCategoryVisible, setNewCategoryVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  const onHandleCreateProduct = async () => {
    const body = {
      productName: productName,
      productPrice: productPrice,
      productDescription: productDescription,
      productTotalQuantity: productTotalQuantity,
      productImage: image,
      productCategory: productCategory,
    };

    console.log("onHandleCreateProduct body ===== > ", body);
    if (
      !body.productName ||
      !body.productPrice ||
      !body.productDescription ||
      !body.productTotalQuantity ||
      !body.productCategory
    ) {
      alert("All fields are required");
    } else {
      try {
        dispatch(addProductData(body));
        navigation.goBack();
      } catch (error) {
        console.error("Error signing up:", error);
        Toast.show(newProduct.message, Toast.LONG);
      }
    }
  };
  const onHandleCreateCategory = async () => {
    const body = {
      categoryName: categoryName,
      categoryImage: categoryImage,
    };

    console.log("onHandleCreateCategory body ===== > ", body);
    if (!body.categoryName) {
      alert("All fields are required");
    } else {
      try {
        dispatch(addCategoryData(body));
        setNewCategoryVisible(false);
      } catch (error) {
        console.error("Error signing up:", error);
        Toast.show(newProduct.message, Toast.LONG);
      }
    }
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(async (image) => {
      if (selecter === false) {
        setLoading(true);
        setVisible(false);

        const result = await firebaseUploader(image);
        if (newCategoryVisible === true) {
          setCategoryImage(result);
          setSelecter(false);
          setLoading(false);
        } else {
          setImage(result);
          setSelecter(false);
          setLoading(false);
        }
      } else {
        setVisible(false);
        setSelecter(false);
        setLoading(false);
      }
    });
  };
  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(async (image) => {
      if (selecter === false) {
        setLoading(true);
        setVisible(false);

        const result = await firebaseUploader(image);
        if (newCategoryVisible === true) {
          setCategoryImage(result);
          setSelecter(false);
          setLoading(false);
        } else {
          setImage(result);
          setSelecter(false);
          setLoading(false);
        }
      } else {
        setVisible(false);
        setSelecter(false);
        setLoading(false);
      }
    });
  };
  const onClear = () => {
    setCategoryImage(null);
    setImage(null);
    setSelecter(false);
  };
  const goBack = () => {
    navigation.goBack();
  };
  const [searchText, setSearchText] = useState("");
  const onClearFilter = () => {
    if (searchText.length > 0) {
      setSearchText("");
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraScrollHeight={100}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.bigCircle}></View>
          <View style={styles.smallCircle}></View>

          <View style={styles.centerizedView}>
            <View style={styles.authBox}>
              <View style={styles.logoBox}>
                {!image ? (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {loading ? (
                      <View style={styles.imageContainer}>
                        <ActivityIndicator
                          size="small"
                          color={Colors.white}
                          animating={true}
                        />
                      </View>
                    ) : (
                      <View style={styles.coverView}>
                        <TouchableOpacity
                          style={styles.touch1}
                          onPress={() => setVisible(true)}
                        >
                          <UploadIcon style={styles.uploadIcon} />
                          <Text
                            style={{
                              color: "black",
                              justifyContent: "center",
                              alignItems: "center",
                              color: Colors.dark,
                            }}
                          >
                            Upload
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                ) : (
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <View style={styles.coverView}>
                      <View style={styles.imageBox}>
                        <TouchableOpacity
                          onPress={onClear}
                          style={styles.touchable}
                        >
                          <CrossRedIcon style={styles.crossRedIcon2} />
                        </TouchableOpacity>
                        <View style={styles.imageContainer}>
                          <FastImage
                            source={{ uri: image }}
                            resizeMode={FastImage.resizeMode.cover}
                            style={styles.image}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              </View>
              <Text style={styles.loginTitleText}>Add New Product</Text>
              <View style={styles.hr}></View>
              <View style={styles.inputBox}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={styles.inputLabel}>Product Category</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => setNewCategoryVisible(true)}
                    style={styles.touch}
                  >
                    <FontAwesome5
                      style={styles.toggleCounterButton}
                      name="plus-circle"
                      size={20}
                      color={Colors.dangerColor}
                    />
                  </TouchableOpacity>
                </View>

                {Array.isArray(categories) && categories.length > 0 && (
                  <>
                    <View style={styles.mainView3}>
                      <SearchBar
                        search={searchText}
                        setSearch={setSearchText}
                        onClearFilter={onClearFilter}
                      />
                    </View>
                    <FlatList
                      horizontal={true}
                      data={categories?.filter((category) =>
                        category?.categoryName.includes(searchText)
                      )}
                      keyExtractor={(item, index) =>
                        index + item._id.toString()
                      }
                      renderItem={({ item, index }) => {
                        return (
                          <TouchableWithoutFeedback
                            onPress={() => {
                              setProductCategory(item?.categoryName);
                              setCategoryIndex(index);
                            }}
                          >
                            <View
                              style={[
                                styles.carouselItem,
                                {
                                  backgroundColor:
                                    categoryIndex === index
                                      ? Colors.dangerColor
                                      : "#fafafa",
                                  borderColor:
                                    categoryIndex === index
                                      ? Colors.dangerColor
                                      : "#fafafa",

                                  borderWidth:
                                    categoryIndex === index ? 0.5 : 0,
                                },
                              ]}
                            >
                              <Text
                                style={{
                                  fontSize: 14,
                                  color:
                                    categoryIndex === index
                                      ? Colors.white
                                      : Colors.dangerColor,
                                  fontWeight: "700",
                                }}
                              >
                                {item.categoryName}
                              </Text>
                            </View>
                          </TouchableWithoutFeedback>
                        );
                      }}
                    />
                  </>
                )}
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Product Name</Text>
                <TextInput
                  placeholder="Product Name"
                  value={productName}
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={(text) => setProductName(text)}
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Product Price</Text>
                <TextInput
                  placeholder="Price"
                  style={styles.input}
                  value={productPrice}
                  label="Price"
                  onChangeText={(text) => setProductPrice(text)}
                  secure={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Product Description</Text>
                <TextInput
                  placeholder="Description"
                  style={[styles.input, { height: 100 }]}
                  value={productDescription}
                  label="Description"
                  onChangeText={(text) => setProductDescription(text)}
                  secure={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  multiline={true}
                  maxLength={500}
                  textAlignVertical="top"
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Product Quantity</Text>
                <TextInput
                  placeholder="Quantity"
                  style={styles.input}
                  value={productTotalQuantity}
                  label="Quantity"
                  onChangeText={(text) => setProductTotalQuantity(text)}
                  secure={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              <Button
                text={"Create Product"}
                color={Colors.white}
                fontSize={20}
                height={50}
                width={"100%"}
                marginTop={30}
                backgroundColor={Colors.dangerColor}
                borderColor={Colors.dangerColor}
                marginBottom={10}
                fontWeight={"bold"}
                onPress={onHandleCreateProduct}
              />

              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={goBack}
              >
                <Text style={[styles.registerText, { color: "#ff4757" }]}>
                  Go Back
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {!!visible && (
            <ImageSelectModal
              loading={loading}
              visible={visible}
              setVisible={setVisible}
              takePhotoFromCamera={takePhotoFromCamera}
              takePhotoFromGallery={takePhotoFromGallery}
            />
          )}
          {!!newCategoryVisible && (
            <CategoryModal
              loading={loading}
              categoryImage={categoryImage}
              newCategoryVisible={newCategoryVisible}
              setNewCategoryVisible={setNewCategoryVisible}
              setVisible={setVisible}
              onClear={onClear}
              categoryName={categoryName}
              setCategoryName={setCategoryName}
              onHandleCreateCategory={onHandleCreateCategory}
              goBack={goBack}
            />
          )}
          {state.isLoading && <Loading />}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default CreateProductScreen;
