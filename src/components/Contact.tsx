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

import { colors } from "../theme";
import { ContactTitle } from "./ContactTitle";
import { MenuModal } from "./MenuModal";
import { deleteContact } from "../actions";
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
  };

  const options = [
    {
      id: "1",
      title: "Delete Contact",
      action: _deleteContact,
    },
    {
      id: "2",
      title: "Edit Contact",
      action: undefined,
    },
  ];

  return (
    <>
      <TouchableHighlight
        underlayColor={colors.veryLightGrey}
        onPress={() =>
          navigation.navigate("Contacts Detail", { id: contactId })
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
      <MenuModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        options={options}
      />
    </>
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
