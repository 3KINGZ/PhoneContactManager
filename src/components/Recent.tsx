import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Icon from "react-native-vector-icons/Feather";
import { colors, fontSize } from "../theme";

interface IRecent {
  details: {
    id: number;
    name: string;
    number: string;
    time: string;
    type: string;
  };
  onPress: any;
}

const recentColors = {
  received: colors.primary,
  outgoing: colors.purple,
  missed: colors.darkGrey,
};

const recentColorsBG = {
  received: colors.lightPink,
  outgoing: colors.lightPurple,
  missed: colors.lightGrey,
};

const recentIcon = {
  received: "phone-incoming",
  outgoing: "phone-forwarded",
  missed: "phone-missed",
};

const ActionModal = ({ onPress }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.lightGrey,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <TouchableOpacity onPress={onPress}>
          <Text>Delete call log</Text>
        </TouchableOpacity>
        <Text>Delete all call logs of this number</Text>
        <Text>Copy number</Text>
      </View>
    </View>
  );
};

export const Recent = ({ details, onPress }: IRecent) => {
  const { id, name, number, time, type } = details;

  const [showModal, setShowModal] = useState(false);

  const openModal = (id: number) => {
    setShowModal(true);
    console.log(id);
  };

  return (
    <>
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        // onPress={() => openModal(id)}
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
          <Text style={{ color: recentColors[type], fontSize: fontSize.small }}>
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
        <ActionModal onPress={() => setShowModal(!showModal)} />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: moderateScale(15),
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
    fontSize: fontSize.regular,
    fontWeight: "bold",
  },
  number: {
    color: colors.grey,
    fontSize: fontSize.small,
  },
});
