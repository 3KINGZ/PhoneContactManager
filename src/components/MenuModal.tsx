import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  Modal,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "../theme";

interface IOption {
  id?: string;
  title: string;
  last?: boolean;
  action: () => any;
  onClose: () => any;
}

interface IOptionArr {
  id: string;
  title: string;
  last?: boolean;
  action: () => any;
}

const Seperator = () => (
  <View style={{ borderColor: colors.lightGrey, borderBottomWidth: 1 }} />
);

const Option = ({ title, action, onClose }: IOption) => {
  const onPress = () => {
    action(), onClose();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.actionBTN}>{title}</Text>
    </TouchableOpacity>
  );
};

interface IMenuModal {
  visible: boolean;
  onClose: () => any;
  options: IOptionArr[];
}

export const MenuModal = ({ visible, onClose, options }: IMenuModal) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
      animationType="fade"
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <View style={styles.ItemsContainer}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Option
                  title={item.title}
                  action={item.action}
                  onClose={onClose}
                />
              )}
              ItemSeparatorComponent={Seperator}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  ItemsContainer: {
    minHeight: 100,
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
  },
  actionBTN: {
    width: "100%",
    textAlign: "center",
    paddingVertical: moderateScale(5),
  },
});
