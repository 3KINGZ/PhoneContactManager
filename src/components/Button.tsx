import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { verticalScale, scale } from "react-native-size-matters";

import { colors } from "../theme";

interface IButton {
  title: string;
  disabled?: boolean;
  onPress: () => any;
}

export const Button = ({ title, disabled, onPress }: IButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { opacity: !disabled ? 0.5 : 1 }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(12),
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginVertical: verticalScale(15),
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: scale(20),
    fontWeight: "bold",
  },
});
