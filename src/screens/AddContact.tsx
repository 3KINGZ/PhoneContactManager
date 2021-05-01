import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Input, Button, MenuModal, ImageInput } from "../components";
import { colors } from "../theme";
import { useForm } from "../hooks";
import { addContact } from "../actions";

export const AddContact = ({ navigation }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [state, actions, options] = useForm();

  const dispatch = useDispatch();

  const { name, address, number, image, email } = state;
  const { setName, setAddress, setNumber, setEmail } = actions;

  const addToContact = () => {
    const id = uuidv4();

    const contact = {
      contactId: id,
      name,
      address,
      number,
      image,
      email,
    };

    dispatch(addContact(contact));

    navigation.navigate("Contacts Detail", { id });
  };

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
                keyboardType="numeric"
              />
              {showMore ? (
                <Input
                  placeholder="Email Address"
                  subtitle="Email"
                  icon="email"
                  value={email}
                  onChange={(text: string) => setEmail(text)}
                  keyboardType="email-address"
                />
              ) : (
                <TouchableOpacity onPress={() => setShowMore(true)}>
                  <Text style={styles.addFieldText}>Add Other Field</Text>
                </TouchableOpacity>
              )}
              <Button
                title="Create Account"
                onPress={addToContact}
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
  addFieldText: {
    fontSize: scale(20),
    color: colors.primary,
    textAlign: "right",
  },
});
