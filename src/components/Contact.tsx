import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Menu } from "react-native-paper";

import { colors } from "../theme";
import { ContactTitle } from "./ContactTitle";
import { deleteContact } from "../actions";
import routes from "../navigation/routes";
interface IC {
  contact: IContact;
}

export const Contact = ({ contact }: IC) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { contactId, image, name, address } = contact;
  const [showModal, setShowModal] = useState(false);

  const _deleteContact = () => {
    dispatch(deleteContact(contactId));
    setShowModal(false);
  };

  const gotoEdit = () => {
    navigation.navigate("Edit Contact", { id: contactId });
    setShowModal(false);
  };

  return (
    <Menu
      visible={showModal}
      onDismiss={() => setShowModal(false)}
      anchor={
        <TouchableHighlight
          underlayColor={colors.veryLightGrey}
          onPress={() =>
            navigation.navigate(routes.CONTACT_DETAIL, { id: contactId })
          }
          onLongPress={() => setShowModal(true)}
        >
          <View style={styles.container}>
            {image ? (
              <Image source={image} style={styles.image} />
            ) : (
              <ContactTitle type="small" name={name} />
            )}
            <View style={styles.textContainer}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.address}>{address}</Text>
            </View>
          </View>
        </TouchableHighlight>
      }
    >
      <Menu.Item onPress={_deleteContact} title="Delete Contact" />
      <Menu.Item onPress={gotoEdit} title="Edit Contact" />
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: moderateScale(1),
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 5,
  },
  textContainer: {
    borderColor: colors.lightGrey,
    borderBottomWidth: 1,
    flex: 1,
    marginLeft: moderateScale(10),
    paddingBottom: moderateScale(15),
  },
  name: {
    fontSize: scale(18),
    fontWeight: "bold",
    marginBottom: 3,
    color: colors.grey,
  },
  address: {
    fontSize: scale(16),
    color: colors.lightGrey,
  },
});
