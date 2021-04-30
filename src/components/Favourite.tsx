import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale } from "react-native-size-matters";

import { colors } from "../theme";
import { ContactTitle } from "./ContactTitle";

export const Favourite = ({ contact }: any) => {
  const { contactId, image, name, address } = contact;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Contacts Detail Fav", { id: contactId })
      }
    >
      <View style={styles.container}>
        {image ? (
          <Image source={image} style={styles.image} />
        ) : (
          <ContactTitle name={name} />
        )}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    margin: 10,
  },
  image: { width: "100%", height: 200, borderRadius: 5 },
  infoContainer: {
    marginTop: 5,
  },
  title: {
    fontSize: scale(18),
    textAlign: "center",
    color: colors.grey,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: scale(16),
    textAlign: "center",
    color: colors.lightGrey,
  },
});
