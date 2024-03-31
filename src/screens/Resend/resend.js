import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import Button from "../../components/Button";
import styles from "./style";

import {
  EmailHighlightIcon,
  EmailIcon,
  ArrowIcon,
} from "../../assets/svg/SvgIcons";

const Resend = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.view}>
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowIcon style={styles.arrowicon} />
          </TouchableOpacity>
          <EmailHighlightIcon style={styles.emailIcon} />
          <Text style={styles.topText}>Reset password</Text>
          <Text style={styles.textdetail}>
            We have sent password recovery{"\n"} instructions to your email.
          </Text>
          <Button
            onPress={() => navigation.replace("Welcome")}
            text={"Continue Login"}
            color={"#fff"}
            backgroundColor={"#4AB5E3"}
            fontSize={15}
            height={50}
            width={"100%"}
            borderWidth={1}
            marginTop={50}
            marginBottom={10}
          />
          <TouchableOpacity style={styles.resendtext1}>
            <Text style={styles.resendtext}>Resend</Text>
          </TouchableOpacity>

          <Text style={styles.bottomText}>
            Didn’t receive the email? Check your spam filter or
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("resetPassword")}
          >
            <Text style={styles.bottomText2}>Try another email address!</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Resend;
