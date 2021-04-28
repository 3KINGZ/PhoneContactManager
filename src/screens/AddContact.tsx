import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "react-native-image-picker/src";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

import { Input, Button } from "../components";
import { colors } from "../theme";

const CameraModal = ({ onClose }: any) => {
  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,
        }}
      >
        <View
          style={{
            backgroundColor: colors.lightPrimary,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            borderRadius: 10,
            padding: moderateScale(10),
          }}
        >
          <TouchableOpacity
            onPress={() =>
              ImagePicker.launchCamera(
                { mediaType: "photo", cameraType: "back" },
                () => console.log("hi"),
              )
            }
          >
            <Text style={styles.actionBTN}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              ImagePicker.launchImageLibrary({ mediaType: "photo" }, () =>
                console.log("hi"),
              )
            }
          >
            <Text style={styles.actionBTNLast}>Open Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const AddContact = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: colors.BG }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <View style={styles.imageInput}>
              <Icon name="camera-outline" size={38} color={colors.primary} />
            </View>
          </TouchableOpacity>
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
        <Modal
          visible={showModal}
          transparent={true}
          onRequestClose={() => setShowModal(!showModal)}
          animationType="fade"
        >
          <CameraModal onClose={() => setShowModal(false)} />
        </Modal>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  imageInput: {
    width: 150,
    height: 150,
    backgroundColor: colors.lightPink,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
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
  actionBTN: {
    borderColor: colors.lightGrey,
    borderBottomWidth: 1,
    width: "100%",
    textAlign: "center",
    paddingVertical: moderateScale(5),
  },
  actionBTNLast: {
    width: "100%",
    textAlign: "center",
    paddingVertical: moderateScale(5),
  },
});
