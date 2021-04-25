import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { BigContactTitle } from "../../components";
import { colors, fontSize } from "../../theme";
import contacts from "../../utils/constants/contacts";
import recents from "../../utils/constants/recents";
import { ContactTabView } from "./partial/ContactTabView";

export const ContactDetail = ({ route }: any) => {
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

  const { name, image, address, email, number } = contact;

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          source={image}
          style={{ width: 150, height: 200, marginTop: 20, borderRadius: 5 }}
        />
      ) : (
        <BigContactTitle title={name} />
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
