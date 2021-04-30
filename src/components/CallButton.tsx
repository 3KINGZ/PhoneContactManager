import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IIcon from "react-native-vector-icons/Ionicons";
import AIcon from "react-native-vector-icons/AntDesign";
import { colors } from "../theme";

const buttons: { [key: string]: any } = {
  record: <MIcon name="record" size={30} color={colors.primary} />,
  pause: <MIcon name="pause" size={30} color={colors.primary} />,
  add: <AIcon name="plus" size={30} color={colors.primary} />,
  volume: <IIcon name="volume-high-outline" size={30} color={colors.primary} />,
  speaker: <IIcon name="mic-outline" size={30} color={colors.primary} />,
  contact: <IIcon name="person-outline" size={30} color={colors.primary} />,
};

interface ICallButton {
  icon: string;
  onPress: () => any;
}

export const CallButton = ({ icon, onPress }: ICallButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>{buttons[icon]}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
