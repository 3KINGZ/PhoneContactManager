import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors } from "../theme";

interface IImageInput {
  image: string;
}

export const ImageInput = ({ image }: IImageInput) => {
  return (
    <>
      {image ? (
        <Image source={image} style={styles.image} />
      ) : (
        <View style={styles.imageInput}>
          <Icon name="camera-outline" size={38} color={colors.primary} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageInput: {
    width: 150,
    height: 150,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
    resizeMode: "cover",
  },
});
