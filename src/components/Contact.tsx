import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors, fontSize } from "../theme";
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: moderateScale(1),
        }}
      >
        {image ? (
          <Image
            source={image}
            style={{
              width: 50,
              height: 50,
              resizeMode: "cover",
              borderRadius: 5,
            }}
          />
        ) : (
          <ContactTitle type="small" name={name} />
        )}
        <View
          style={{
            borderColor: colors.lightGrey,
            borderBottomWidth: 1,
            flex: 1,
            marginLeft: moderateScale(10),
            paddingTop: moderateScale(10),
            paddingBottom: moderateScale(15),
          }}
        >
          <Text
            style={{
              fontSize: fontSize.regular,
              fontWeight: "bold",
              marginBottom: 3,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: fontSize.small,
              color: colors.grey,
            }}
          >
            {address}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
