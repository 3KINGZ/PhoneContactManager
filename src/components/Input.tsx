import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/FontAwesome";
import IIcon from "react-native-vector-icons/Ionicons";

import { fontSize, colors } from "../theme";

const Phone = () => <Icon name="phone" color={colors.purple} size={24} />;
const Person = () => (
  <IIcon name="person-outline" color={colors.primary} size={24} />
);
const Location = () => (
  <IIcon name="location-outline" color={colors.primary} size={24} />
);

interface IInput {
  icon?: string;
  placeholder: string;
  subtitle: string;
  value: string;
  onChange: (text: string) => void;
}

export const Input = ({
  icon,
  placeholder,
  subtitle,
  value,
  onChange,
}: IInput) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 24 }}>
        {icon === "person" ? (
          <Person />
        ) : icon === "phone" ? (
          <Phone />
        ) : (
          <Location />
        )}
      </View>
      <View style={styles.infoContainer}>
        {!value ? (
          <View style={{ zIndex: 0 }}>
            <Text style={styles.placeholder}>{placeholder}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        ) : null}
        <TextInput
          style={value ? styles.input : styles.inputAbs}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: colors.grey,
    borderBottomWidth: 0.5,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: colors.BG,
    marginVertical: 15,
    height: scale(50),
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: fontSize.large,
    color: colors.grey,
  },
  subtitle: {
    fontSize: fontSize.small,
    color: colors.lightGrey,
  },
  input: {
    width: "100%",
    flex: 1,
    height: 100,
    fontSize: scale(18),
  },
  inputAbs: {
    position: "absolute",
    width: "100%",
    flex: 1,
    height: scale(40),
    zIndex: 0,
  },
});
