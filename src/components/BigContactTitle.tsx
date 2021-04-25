import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../theme";

export const BigContactTitle = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title[0]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightPurple,
    borderRadius: 5,
  },
  title: {
    fontSize: scale(60),
    color: colors.purple,
    fontWeight: "bold",
  },
});
