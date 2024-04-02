import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
import ImagePicker from "react-native-image-crop-picker";
import Toast from "react-native-root-toast";
import { Colors } from "../../utilis/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CrossRedIcon, UploadIcon } from "../../assets/svg/SvgIcons";
import styles from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebaseUploader from "../../utilis/firebaseUpload";
import Button from "../../components/Button";
import FastImage from "react-native-fast-image";
import Loading from "../../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { addNewProduct } from "../../redux/slices/addProduct";

const CreateProductScreen = ({ navigation }) => {
  const newProduct = useSelector((state) => state.addNewProduct);
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("dummy");
  const [productPrice, setProductPrice] = useState("1200");
  const [productDescription, setProductDescription] = useState(
    "werdftghkjl nj l s ljv jv aj afv "
  );
  const [productTotalQuantity, setProductTotalQuantity] = useState("1000");
  const [productCategory, setProductCategory] = useState("Dummy");
  const [selecter, setSelecter] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

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
        dispatch(addNewProduct(body));
        navigation.goBack();
      } catch (error) {
        console.error("Error signing up:", error);
        Toast.show(newProduct.errorMessage, Toast.LONG);
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
        setImage(result);
        setSelecter(false);
        setLoading(false);
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
        setImage(result);
        setSelecter(false);
        setLoading(false);
      } else {
        setVisible(false);
        setSelecter(false);
        setLoading(false);
      }
    });
  };
  const onClear = () => {
    setImage(null);
    setSelecter(false);
  };
  const goBack = () => {
    navigation.goBack();
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
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Product Category</Text>
                <TextInput
                  placeholder="Category"
                  style={styles.input}
                  value={productCategory}
                  label="Category"
                  onChangeText={(text) => setProductCategory(text)}
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
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Modal isVisible={visible}>
                <View style={styles.ModalView}>
                  <TouchableOpacity
                    onPress={() => setVisible(false)}
                    style={styles.modalIcon}
                  >
                    <CrossRedIcon style={styles.crossRedIcon} />
                  </TouchableOpacity>
                  <Text style={{ color: Colors.modalTextColor }}>
                    Click your desired Button
                  </Text>
                  <View style={styles.ModalBtnView}>
                    <Button
                      text={"Open camera"}
                      color={Colors.white}
                      fontSize={15}
                      height={45}
                      width={"40%"}
                      marginTop={30}
                      backgroundColor={Colors.dangerColor}
                      borderColor={Colors.dangerColor}
                      marginBottom={10}
                      onPress={takePhotoFromCamera}
                    />

                    <Button
                      text={"Open Gallery"}
                      color={Colors.white}
                      fontSize={15}
                      height={45}
                      width={"40%"}
                      marginTop={30}
                      backgroundColor={Colors.dangerColor}
                      borderColor={Colors.dangerColor}
                      marginBottom={10}
                      onPress={takePhotoFromGallery}
                    />
                  </View>
                </View>
              </Modal>
            </View>
          )}
          {newProduct.isLoading && <Loading />}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default CreateProductScreen;
