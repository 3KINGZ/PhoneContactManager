import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/AntDesign";

import { colors, fontSize } from "../theme";

export const SearchBar = ({ onChange }: any) => {
  return (
    <View style={styles.container}>
      <Icon
        name="search1"
        size={22}
        color={colors.lightGrey}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.veryLightGrey,
    paddingLeft: 20,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 20,
  },
  icon: {
    marginBottom: moderateScale(5),
  },
  input: {
    flex: 1,
    fontSize: fontSize.large,
  },
});
