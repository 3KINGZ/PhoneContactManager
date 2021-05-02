import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Icon from "react-native-vector-icons/FontAwesome";

import { colors } from "../theme";
import { CallButton } from "../components";
import { generateTitleCase } from "../utils";

const buttons = [
  {
    id: uuidv4(),
    icon: "record",
    action: undefined,
  },
  {
    id: uuidv4(),
    icon: "pause",
    action: undefined,
  },
  {
    id: uuidv4(),
    icon: "add",
    action: undefined,
  },
  {
    id: uuidv4(),
    icon: "volume",
    action: undefined,
  },
  {
    id: uuidv4(),
    icon: "speaker",
    action: undefined,
  },
  {
    id: uuidv4(),
    icon: "contact",
    action: undefined,
  },
];

export const CallScreen = ({ navigation, route }: any) => {
  const id = route.params.id;
  const contacts = useSelector((state) => state.contacts.contacts);

  const contact = contacts.find((contact) => contact.contactId === id);

  const { image, name, number } = contact;

  const titleCase = generateTitleCase(name);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={contact.image} style={styles.image} />
        ) : (
          <View style={styles.contactTitleContainer}>
            <Text style={styles.contactTitleText}>{titleCase}</Text>
          </View>
        )}
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.callStateText}>Dialing...</Text>
      </View>
      <View style={{ flex: 1, marginVertical: moderateVerticalScale(10) }}>
        <FlatList
          data={buttons}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CallButton icon={item.icon} onPress={item.action} />
          )}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("App", { screen: "Recent" })}
      >
        <View style={styles.endCall}>
          <Icon name="phone" color={colors.BG} size={40} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    paddingHorizontal: 20,
    paddingVertical: moderateVerticalScale(30),
    alignItems: "center",
  },
  imageContainer: {
    borderColor: colors.lightGrey,
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 2,
  },
  contactTitleContainer: {
    width: 200,
    height: 200,
    backgroundColor: colors.secondary,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  contactTitleText: {
    fontSize: scale(96),
    color: colors.primary,
    fontWeight: "bold",
  },
  name: {
    fontSize: scale(24),
    fontWeight: "bold",
    textAlign: "center",
  },
  number: {
    fontSize: scale(18),
    color: colors.grey,
    textAlign: "center",
  },
  detailContainer: { marginTop: 10 },
  callStateText: {
    marginTop: 5,
    color: colors.primary,
    fontSize: scale(18),
    fontWeight: "bold",
    textAlign: "center",
  },
  endCall: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
