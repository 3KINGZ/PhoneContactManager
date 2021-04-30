import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IIcon from "react-native-vector-icons/Ionicons";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, fontSize } from "../theme";

const gmail = require("../assets/images/gmail.png");

interface IDetail {
  type: string;
  emailPhone: string;
}

export const Detail = ({ type, emailPhone }: IDetail) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
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
      <View style={styles.iconMainContainer}>
        {type !== "email" ? (
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: colors.lightPurple, marginRight: 8 },
            ]}
          >
            <Icon name="phone" color={colors.purple} size={18} />
          </View>
        ) : (
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: colors.secondary },
            ]}
          >
            <MIcon name="email" color={colors.primary} size={18} />
          </View>
        )}
        {type !== "email" ? (
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: colors.secondary },
            ]}
          >
            <IIcon
              name="chatbubble-ellipses-outline"
              color={colors.primary}
              size={18}
            />
          </View>
        ) : null}
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
  infoContainer: { flexDirection: "row", alignItems: "center" },
  iconMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: colors.lightPurple,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
