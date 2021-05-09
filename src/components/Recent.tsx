import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Menu } from "react-native-paper";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { colors } from "../theme";
import { addToHistory, deleteCallHistory } from "../actions";
import routes from "../navigation/routes";

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
  const dispatch = useDispatch();

  const { id, contactId, name, number, time, type } = details;

  const [showModal, setShowModal] = useState(false);

  const makeCall = () => {
    dispatch(addToHistory({ ...details, id: uuidv4() }));

    navigation.navigate("Call", {
      screen: routes.CALL_OUTGOING,
      params: { id: contactId },
    });
  };

  const _deleteCallHistory = () => {
    dispatch(deleteCallHistory(id));
    setShowModal(false);
  };

  return (
    <Menu
      visible={showModal}
      onDismiss={() => setShowModal(false)}
      anchor={
        <TouchableHighlight
          underlayColor={colors.lightGrey}
          onPress={makeCall}
          onLongPress={() => setShowModal(true)}
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
                {name || number}
              </Text>
              <Text style={styles.number}>{number}</Text>
            </View>
            <Text style={{ color: recentColors[type], fontSize: scale(14) }}>
              {time}
            </Text>
          </View>
        </TouchableHighlight>
      }
    >
      <Menu.Item onPress={_deleteCallHistory} title="Delete" />
      <Menu.Item
        onPress={() => {}}
        title="Delete all call logs of this number"
      />
    </Menu>
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
