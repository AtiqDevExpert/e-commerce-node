import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../utilis/colors";

const SearchBar = ({ search, setSearch, onClearFilter }) => {
  return (
    <View style={styles.searchView}>
      <View style={styles.inputView}>
        <TextInput
          value={search}
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor={"#000"}
          textContentType="name"
          onChangeText={(text) => {
            setSearch(text);
          }}
          editable={true}
        />
        {search === "" ? (
          <TouchableOpacity>
            <FontAwesome5 name="search" size={24} color={Colors.dangerColor} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onClearFilter}>
            <FontAwesome5 name="times" size={24} color={Colors.dangerColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchView: {
    flexDirection: "row",
    // width: "100%",
  },
  inputView: {
    // flex: 1,
    height: 50,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    // marginHorizontal: 20,
    zIndex: 10000,
    width: "100%",
    borderColor: Colors.dangerColor,
  },
  input: {
    flex: 1,
    height: 80,
    fontSize: 16,
    flexDirection: "row",
    color: "black",
  },
});
export default SearchBar;
