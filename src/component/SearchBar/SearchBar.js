import {View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => {
  const [search, setSearch] = useState();
  return (
    <View style={styles.searchView}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor={'#000'}
          textContentType="name"
          onChangeText={text => {
            setSearch(text);
          }}
        />
        {!search ? (
          <TouchableOpacity>
            <FontAwesome5 name="search" size={24} color="#333" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSearch('');
            }}>
            <FontAwesome5 name="times" size={24} color="#333" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
