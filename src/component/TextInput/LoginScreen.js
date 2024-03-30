import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <TextInput
          placeholder="Enter Email"
          style={styles.inputView}
          placeholderTextColor={'#000000'}
          keyboardType="email-address"
          required
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.inputView}
          secureTextEntry
          placeholderTextColor={'#000000'}
          keyboardType="default"
          required
        />
      </View>
    </View>
  );
};

export default LoginScreen;
