import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../theme";
import { MenuModal } from "./MenuModal";

interface IRecent {
  details: {
    id: string;
    contactId?: string;
    name: string;
    number: string;
    time: string;
    type: string;
  };
}

const recentColors: { [key: string]: string } = {
  received: colors.primary,
  outgoing: colors.purple,
  missed: colors.grey,
};

const recentColorsBG: { [key: string]: string } = {
  received: colors.secondary,
  outgoing: colors.lightPurple,
  missed: colors.lightGrey,
};

const recentIcon: { [key: string]: string } = {
  received: "phone-incoming",
  outgoing: "phone-forwarded",
  missed: "phone-missed",
};

export const Recent = ({ details }: IRecent) => {
  const navigation = useNavigation();

  const { id, contactId, name, number, time, type } = details;

  const [showModal, setShowModal] = useState(false);

  const openModal = (id: string) => {
    setShowModal(true);
    console.log(id);
  };

  const options = [
    {
      id: "1",
      title: "Delete all call logs of this number",
      action: () => console.log("Delete All Call Logs For this Number"),
    },
    {
      id: "2",
      title: "Copy number",
      action: () => console.log("Copy Number"),
    },
  ];

  return (
    <>
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        onPress={() =>
          navigation.navigate("Call", {
            screen: "Call-Outgoing",
            params: { id: contactId },
          })
        }
        onLongPress={() => openModal(id)}
      >
        <View style={[styles.container]}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: recentColorsBG[type] },
            ]}
          >
            <Icon
              name={recentIcon[type]}
              color={recentColors[type]}
              size={24}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
            <Text style={styles.number}>{number}</Text>
          </View>
          <Text style={{ color: recentColors[type], fontSize: scale(14) }}>
            {time}
          </Text>
        </View>
      </TouchableHighlight>
      <Modal
        visible={showModal}
        transparent={true}
        onRequestClose={() => setShowModal(!showModal)}
        animationType="fade"
      >
        <MenuModal
          visible={showModal}
          options={options}
          onClose={() => setShowModal(false)}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: moderateVerticalScale(9),
    justifyContent: "space-between",
  },
  iconContainer: {
    height: moderateVerticalScale(40),
    width: moderateScale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  infoContainer: {
    width: "50%",
  },
  name: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: colors.grey,
  },
  number: {
    fontSize: scale(16),
    color: colors.lightGrey,
  },
  actionBTN: {
    borderColor: colors.lightGrey,
    borderBottomWidth: 1,
    width: "100%",
    textAlign: "center",
    paddingVertical: moderateScale(5),
  },
  actionBTNLast: {
    width: "100%",
    textAlign: "center",
    paddingVertical: moderateScale(5),
  },
});
