import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import { colors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { ContactTitle } from "./ContactTitle";

interface IC {
  contact: IContact;
}

export const Contact = ({ contact }: IC) => {
  const navigation = useNavigation();

  const { contactId, image, name, address } = contact;

  return (
    <TouchableHighlight
      underlayColor={colors.veryLightGrey}
      onPress={() => navigation.navigate("Contacts Detail", { id: contactId })}
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
