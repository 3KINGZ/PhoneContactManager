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
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import OptionsMenu from "react-native-option-menu";

import { Input, Button, ImageInput } from "../components";
import { colors } from "../theme";
import { useForm } from "../hooks";
import { editContact } from "../actions";

export const EditContact = ({ navigation, route }: any) => {
  const id = route.params.id;
  const contacts = useSelector((state: any) => state.contacts.contacts);

  const contact = contacts.find(
    (contact: IContact) => contact.contactId === id,
  );

  const [showMore, setShowMore] = useState(false);
  const [state, actions, options] = useForm(contact);

  const { name, image, address, email, number } = state;
  const { setName, setAddress, setNumber, setEmail } = actions;

  const dispatch = useDispatch();

  const _editContact = () => {
    console.log(id);
    const contact = {
      ...state,
      contactId: uuidv4(),
    };

    dispatch(editContact(id, contact));
    navigation.navigate("Contacts");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.BG }}>
      <View style={styles.container}>
        <OptionsMenu
          customButton={<ImageInput image={image} />}
          destructiveIndex={1}
          options={[options[0].title, options[1].title, options[2].title]}
          actions={[options[0].action, options[1].action, options[2].action]}
        />
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
              defaultValue={name}
            />
            <Input
              placeholder="Address"
              subtitle="User Location"
              value={address}
              onChange={(text: string) => setAddress(text)}
              defaultValue={address}
            />
            <Input
              placeholder="Mobile Number"
              subtitle="Local Number"
              icon="phone"
              value={number}
              onChange={(text: string) => setNumber(text)}
              keyboardType="numeric"
              defaultValue={number}
            />
            {showMore ? (
              <Input
                placeholder="Email Address"
                subtitle="Email"
                icon="email"
                value={email}
                onChange={(text: string) => setEmail(text)}
                keyboardType="email-address"
                defaultValue={email}
              />
            ) : (
              <TouchableOpacity onPress={() => setShowMore(true)}>
                <Text style={styles.addFieldText}>Add Other Field</Text>
              </TouchableOpacity>
            )}
            <Button
              title="Create Account"
              onPress={_editContact}
              disabled={name && address && number ? true : false}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ScrollView>
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
