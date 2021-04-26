import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors, fontSize } from "../theme";
import { generateTitleCase } from "../utils";

export const ContactTitle = ({
  name,
  type,
}: {
  name: string;
  type?: string;
}) => {
  const titleCase = generateTitleCase(name);

  return (
    <>
      {type === "small" ? (
        <View style={styles.smallTitleContainer}>
          <Text style={styles.smallTitle}>{titleCase}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>{titleCase}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightPurple,
    borderRadius: 5,
  },
  smallTitleContainer: {
    backgroundColor: colors.lightPurple,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: scale(60),
    color: colors.purple,
    fontWeight: "bold",
  },
  smallTitle: {
    color: colors.purple,
    fontWeight: "bold",
    fontSize: fontSize.large,
  },
});
