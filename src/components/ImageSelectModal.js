import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "../utilis/colors";
import Modal from "react-native-modal";
import { CrossRedIcon } from "../assets/svg/SvgIcons";
import Button from "./Button";
const ImageSelectModal = ({
  visible,
  setVisible,
  takePhotoFromCamera,
  takePhotoFromGallery,
}) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  ModalView: {
    backgroundColor: "#fff",
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  ModalBtnView: {
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
    justifyContent: "space-evenly",
  },

  modalIcon: {
    width: 18,
    height: 18,
    position: "absolute",
    right: 0,
    top: 0,
  },
  image: { width: 80, height: 80, borderRadius: 100 },
  imageBox: {
    flexDirection: "row-reverse",
    marginHorizontal: 10,
  },
  touchable: {
    marginTop: -10,
    height: 15,
    marginLeft: -10,
  },
  imageContainer: {
    justifyContent: "center",
  },

  coverView: {
    backgroundColor: Colors.white,
    height: 80,
    width: 80,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.hiddenText,

    justifyContent: "center",
    alignItems: "center",
  },
  touch1: {
    justifyContent: "center",
    alignItems: "center",
  },
  uploadIcon: { height: 30, width: 30 },

  crossRedIcon: {
    height: 30,
    width: 30,
    bottom: 18,
    marginRight: -12,
  },
  crossRedIcon2: {
    height: 30,
    width: 30,
    // top: 5,
    marginRight: -16,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  eyeIconContainer: {
    position: "absolute",
    right: 0,
    paddingRight: 10,
  },
  carouselItem: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainView3: {
    marginVertical: 10,
  },
});
export default ImageSelectModal;
