import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale } from "react-native-size-matters";

import { colors } from "../theme";
import { ContactTitle } from "./ContactTitle";
import { MenuModal } from "./MenuModal";
import { useModal } from "../hooks";
import routes from "../navigation/routes";

type Props = {
  onLongPress: (event: GestureResponderEvent) => void;
};

export const Favourite = ({ contact }: any) => {
  const [showModal, openModal, closeModal] = useModal();

  const { contactId, image, name, address } = contact;

  const navigation = useNavigation();

  const options = [
    {
      id: "1",
      title: "Remove from favourite",
      action: () => undefined,
    },
  ];

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(routes.FAVOURITES_CONTACT_DETAIL, {
            id: contactId,
          })
        }
        onLongPress={openModal}
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
      <MenuModal visible={showModal} onClose={closeModal} options={options} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    margin: scale(10),
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
