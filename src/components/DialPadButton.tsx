import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../theme";
import Icon from "react-native-vector-icons/FontAwesome";
import IIcon from "react-native-vector-icons/Ionicons";

interface IDialPadButton {
  dial: { id: string; number?: string; string?: string };
  onDelete: () => any;
  onChange: (number: any) => any;
}

export const DialPadButton = ({ dial, onDelete, onChange }: IDialPadButton) => {
  const { number, string } = dial;

  const phone = <Icon name="phone" color={colors.purple} size={38} />;

  const backBTN = (
    <IIcon name="backspace-outline" color={colors.primary} size={38} />
  );

  return (
    <TouchableOpacity
      onPress={string === "delete" ? onDelete : () => onChange(number)}
    >
      {string === "phone" ? (
        <View style={styles.container}>{phone}</View>
      ) : string === "delete" ? (
        <View style={styles.emptyContainer}>{backBTN}</View>
      ) : !number && !string ? (
        <View style={styles.emptyContainer}></View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.number}>{number}</Text>
          <Text style={styles.string}>{string}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.veryLightGrey,
    width: scale(70),
    height: scale(70),
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 7,
    marginHorizontal: 15,
  },
  emptyContainer: {
    width: scale(70),
    height: scale(70),
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    marginHorizontal: 15,
  },
  number: {
    color: colors.grey,
    fontSize: scale(17),
  },
  string: {
    fontSize: scale(15),
    color: colors.lightGrey,
  },
});
