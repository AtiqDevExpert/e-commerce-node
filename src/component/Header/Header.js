import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import SearchBar from '../SearchBar/SearchBar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ProfileEmailIcon} from '../../SVG/SvgIcons';
const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Unique Mart</Text>
      <SearchBar />
    </SafeAreaView>
  );
};

export default Header;
