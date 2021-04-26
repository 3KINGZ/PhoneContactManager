import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fontSize } from "../theme";
import { ContactTitle } from "./ContactTitle";
import { useNavigation } from "@react-navigation/native";

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
          <Image
            source={image}
            style={{ width: "100%", height: 200, borderRadius: 5 }}
          />
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
    width: 150,
    margin: 10,
  },
  infoContainer: {
    marginTop: 5,
  },
  title: {
    fontSize: fontSize.large,
    textAlign: "center",
  },
  subtitle: {
    fontSize: fontSize.regular,
    color: colors.grey,
    textAlign: "center",
  },
});
