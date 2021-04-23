import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import Icon from "react-native-vector-icons/Feather";
import { colors, fontSize } from "../theme";
import { useNavigation } from "@react-navigation/native";

interface IRecent {
  details: {
    id: number;
    name: string;
    number: string;
    time: string;
    type: string;
  };
}

const recentColors: { [key: string]: string } = {
  received: colors.primary,
  outgoing: colors.purple,
  missed: colors.darkGrey,
};

const recentColorsBG: { [key: string]: string } = {
  received: colors.lightPink,
  outgoing: colors.lightPurple,
  missed: colors.lightGrey,
};

const recentIcon: { [key: string]: string } = {
  received: "phone-incoming",
  outgoing: "phone-forwarded",
  missed: "phone-missed",
};

const ActionModal = ({ onClose }: any) => {
  return (
    <TouchableWithoutFeedback onPress={onClose}>
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
            backgroundColor: colors.lightPrimary,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            borderRadius: 10,
            padding: moderateScale(10),
          }}
        >
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.actionBTN}>Delete call log</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionBTN}>
              Delete all call logs of this number
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionBTN}>Copy number</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionBTNLast}>Copy number</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const Recent = ({ details }: IRecent) => {
  const navigation = useNavigation();

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
        onPress={() => navigation.navigate("Recent Detail")}
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
        <ActionModal
          // onPress={() => setShowModal(!showModal)}
          onClose={() => setShowModal(!showModal)}
        />
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
