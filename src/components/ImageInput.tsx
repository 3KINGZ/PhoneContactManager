import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors } from "../theme";

interface IImageInput {
  image: string;
  onPress: () => any;
}

export const ImageInput = ({ image, onPress }: IImageInput) => {
  return (
    <>
      {image ? (
        <TouchableOpacity onPress={onPress}>
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.imageInput}>
            <Icon name="camera-outline" size={38} color={colors.primary} />
          </View>
        </TouchableOpacity>
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
