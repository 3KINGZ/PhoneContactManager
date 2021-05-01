import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { scale } from "react-native-size-matters";

import { ContactTitle } from "../../components";
import contacts from "../../utils/constants/contacts";
import recents from "../../utils/constants/recents";
import { ContactTabView } from "./partials/ContactTabView";
import { colors, fontSize } from "../../theme";

export const ContactDetail = ({ route, navigation }: any) => {
  const [contact, setContact] = useState<IContact | any>({});
  const [logs, setLogs] = useState<any>();
  const id = route.params.id;

  useEffect(() => {
    const contact = contacts.find(
      (contact: IContact) => contact.contactId === id,
    );
    const logs = recents.filter((recent) => recent.contactId === id);
    setContact(contact);
    setLogs(logs);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Icon
            style={{ marginRight: 15 }}
            name="more-vertical"
            size={fontSize.large}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const { contactId, name, image, address, email, number } = contact;

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          source={image}
          style={{ width: 150, height: 200, marginTop: 20, borderRadius: 5 }}
        />
      ) : (
        <ContactTitle name={name} />
      )}
      <View style={{ marginTop: 10 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
      <ContactTabView
        id={contactId}
        email={email}
        number={number}
        logs={logs}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    alignItems: "center",
  },
  scene: {
    flex: 1,
  },
  name: {
    fontSize: scale(20),
    fontWeight: "bold",
    textAlign: "center",
    color: colors.grey,
  },
  address: {
    fontSize: scale(17),
    textAlign: "center",
    color: colors.lightGrey,
  },
});
