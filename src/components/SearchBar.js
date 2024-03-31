import {View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
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
const styles = StyleSheet.create({
  searchView: {
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    width:"100%"
  },
  inputView: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    marginHorizontal:20
  },
  input: {
    flex: 1,
    height: 80,
    fontSize: 20,
    flexDirection: 'row',
    color: 'black',
  },
});
export default SearchBar;
