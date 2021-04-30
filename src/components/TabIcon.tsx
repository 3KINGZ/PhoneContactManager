import React from "react";
import { View, StyleSheet } from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IIcon from "react-native-vector-icons/Ionicons";
import { moderateScale } from "react-native-size-matters";
import { colors } from "../theme";

interface ITabIcon {
  name: string;
  type?: string;
  active: boolean;
}

export const TabIcon = ({ name, type, active }: ITabIcon) => {
  return (
    <View style={active ? styles.containerActive : styles.container}>
      {type === "micon" ? (
        <MIcon
          name={name}
          color={active ? colors.primary : colors.grey}
          size={20}
        />
      ) : (
        <IIcon
          name={name}
          color={active ? colors.primary : colors.grey}
          size={20}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(15),
    borderRadius: 15,
  },
  containerActive: {
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(15),
    borderRadius: 15,
    backgroundColor: colors.secondary,
  },
});
