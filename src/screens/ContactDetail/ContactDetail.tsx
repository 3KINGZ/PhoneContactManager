import React, { useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { scale } from "react-native-size-matters";

import { ContactTitle } from "../../components";
import { ContactTabView } from "./partials/ContactTabView";
import { colors, fontSize } from "../../theme";
import { useContactDetail } from "../../hooks";

export const ContactDetail = ({ route, navigation }: any) => {
  const id = route.params.id;
  const [contact, logs] = useContactDetail(id);

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
        <Image source={image} style={styles.image} />
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
  image: { width: 150, height: 200, marginTop: 20, borderRadius: 5 },
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
