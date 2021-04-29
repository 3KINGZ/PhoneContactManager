import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import * as ImagePicker from "react-native-image-picker/src";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

import { Input, Button, MenuModal, ImageInput } from "../components";
import { colors } from "../theme";
import { useForm } from "../hooks";

export const AddContact = () => {
  const [showModal, setShowModal] = useState(false);
  const [state, actions] = useForm();

  const { name, address, number, image } = state;
  const { setName, setAddress, setNumber, setImage } = actions;

  const options = [
    {
      id: "1",
      title: "Open Camera",
      action: () =>
        ImagePicker.launchCamera(
          { mediaType: "photo", cameraType: "back" },
          () => console.log("hi"),
        ),
    },
    {
      id: "2",
      title: "Open Gallery",
      action: () =>
        ImagePicker.launchImageLibrary({ mediaType: "photo" }, (image: any) =>
          setImage(image),
        ),
    },
    {
      id: "3",
      title: "Remove Image",
      action: () => {
        setImage(""), setShowModal(false);
      },
    },
  ];

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: colors.BG }}>
        <View style={styles.container}>
          <ImageInput image={image} onPress={() => setShowModal(true)} />
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Add Photo</Text>
            <Text style={styles.text2}>Will only be save on the phone</Text>
          </View>
          <KeyboardAwareScrollView
            style={{ width: "100%" }}
            extraScrollHeight={150}
            enableOnAndroid={true}
          >
            <View style={styles.inputContainer}>
              <Input
                placeholder="Add Name"
                subtitle="Mobile Number"
                icon="person"
                value={name}
                onChange={(text: string) => setName(text)}
              />
              <Input
                placeholder="Address"
                subtitle="User Location"
                value={address}
                onChange={(text: string) => setAddress(text)}
              />
              <Input
                placeholder="Mobile Number"
                subtitle="Local Number"
                icon="phone"
                value={number}
                onChange={(text: string) => setNumber(text)}
              />
              <Text
                style={{
                  fontSize: scale(20),
                  color: colors.primary,
                  textAlign: "right",
                }}
              >
                Add Other Field
              </Text>
              <Button
                title="Create Account"
                onPress={() => console.log("hello world")}
                active={name && address && number ? true : false}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </ScrollView>
      <MenuModal
        visible={showModal}
        options={options}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: verticalScale(15),
  },
  textContainer: { marginVertical: verticalScale(10) },
  text1: {
    fontSize: scale(20),
    fontWeight: "bold",
    textAlign: "center",
  },
  text2: {
    fontSize: scale(17),
    textAlign: "center",
    color: colors.grey,
  },
  inputContainer: {
    width: "100%",
    flex: 1,
  },
});
