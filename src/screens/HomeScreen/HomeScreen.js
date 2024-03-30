import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../component/Header/Header';
import ProductScreen from '../ProductScreen/ProductScreen';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ProductScreen />
    </SafeAreaView>
  );
};

export default HomeScreen;
