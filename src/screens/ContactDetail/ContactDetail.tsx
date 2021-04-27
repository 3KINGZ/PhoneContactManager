import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ContactTitle } from "../../components";
import { colors, fontSize } from "../../theme";
import contacts from "../../utils/constants/contacts";
import recents from "../../utils/constants/recents";
import { ContactTabView } from "./partial/ContactTabView";
import Icon from "react-native-vector-icons/Feather";

export const ContactDetail = ({ route, navigation }: any) => {
  const [contact, setContact] = useState<IContact | any>({});
  const [logs, setLogs] = useState([]);
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

  const { name, image, address, email, number } = contact;

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
        <Text
          style={{
            fontSize: fontSize.large,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: fontSize.regular,
            color: colors.grey,
            textAlign: "center",
          }}
        >
          {address}
        </Text>
      </View>
      <ContactTabView email={email} number={number} logs={logs} />
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
});