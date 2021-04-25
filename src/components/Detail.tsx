import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IIcon from "react-native-vector-icons/Ionicons";
import { colors, fontSize } from "../theme";

const gmail = require("../assets/images/gmail.png");

interface IDetail {
  type: string;
  emailPhone: string;
}

export const Detail = ({ type, emailPhone }: IDetail) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 24 }}>
          {type === "email" ? (
            <Image source={gmail} style={{ width: 24, height: 24 }} />
          ) : (
            <Icon name="phone" size={24} color={colors.purple} />
          )}
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: fontSize.regular }}>{emailPhone}</Text>
          <Text style={{ fontSize: fontSize.small, color: colors.grey }}>
            {type === "email" ? "Gmail Account" : "Mobile Number"}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {type !== "email" ? (
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: colors.lightPurple,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 8,
            }}
          >
            <Icon name="phone" color={colors.purple} size={18} />
          </View>
        ) : null}
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: colors.lightPink,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IIcon
            name="chatbubble-ellipses-outline"
            color={colors.primary}
            size={18}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 7,
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: colors.veryLightGrey,
  },
});
