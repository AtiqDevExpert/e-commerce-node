import { getStorage, ref, uploadFile } from "@react-native-firebase/storage";
import storage from "@react-native-firebase/storage";
import { utils } from "@react-native-firebase/app";
import { Alert, Platform } from "react-native";
const currentDateTime = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
};
const firebaseUploader = async (file) => {
  const { path } = file;
  let task;
  let downloadURL;

  if (path) {
    const filename = path.substring(path.lastIndexOf("/") + 1);
    const uploadPath =
      Platform.OS === "ios" ? path.replace("file://", "") : path;

    task = storage().ref(`${filename}`).putFile(uploadPath);

    task.on("state_changed", (snapshot) => {
      console.log(snapshot);
    });

    try {
      await task;
      downloadURL = await storage().ref(`${filename}`).getDownloadURL();

      console.log("Download URL:", downloadURL);

      return downloadURL;
    } catch (e) {
      console.error("Error uploading image to Firebase:", e);
      throw e;
    }
  } else {
    console.error("Invalid file path");
    return null;
  }
};

export default firebaseUploader;
