import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
} from '../../../../Svgs/Profile/ProfileVectors';
import {
  MassageIcon,
  MassageEmptyScreenIcon,
} from '../../../../Svgs/Facility/Icons';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
const EmptyScreen: React.FC<any> = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Message</Text>
        <Text style={styles.dummyText}></Text>
       
      </View>
      <View style={styles.searchView}>
        <View style={styles.inputView}>
          <MassageIcon style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search contacts..."
            textContentType="name"
            placeholderTextColor="#798293"
            onChangeText={text => {
              setSearch(text);
            }}
          />
        </View>
      </View>
      <View style={styles.view1}>
        <MassageEmptyScreenIcon style={styles.icon} />
        <Text style={styles.text1}>No message yet...</Text>
        <Text style={styles.text2}>
          It seems, No message in your inbox {'\n'} “Let’s start messaginh now”
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default EmptyScreen;
