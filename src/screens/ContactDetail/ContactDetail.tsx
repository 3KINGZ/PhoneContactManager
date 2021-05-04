import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import OptionsMenu from "react-native-option-menu";

import { ContactTitle, MoreIcon } from "../../components";
import { ContactTabView } from "./partials/ContactTabView";
import { colors } from "../../theme";
import { useContactDetail } from "../../hooks";
import { AfterInteractions } from "react-native-interactions";
import { PlaceHolderScreen } from "../PlaceHolderScreen";

export const ContactDetail = ({ route, navigation }: any) => {
  const id = route.params.id;
  const [contact, logs] = useContactDetail(id);

  const { contactId, name, image, address, email, number } = contact;

  const gotoEdit = () => {
    navigation.navigate("Edit Contact", { id });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <OptionsMenu
          customButton={MoreIcon}
          destructiveIndex={1}
          options={["Edit Contact", "Add to favourites", "Cancel"]}
          actions={[gotoEdit, gotoEdit]}
        />
      ),
    });
  }, [navigation]);

  return (
    <AfterInteractions placeholder={<PlaceHolderScreen />}>
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
    </AfterInteractions>
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
