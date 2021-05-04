import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ContactsScreen,
  ContactDetail,
  AddContact,
  EditContact,
  PlaceHolderScreen,
} from "../screens";
import { headerProps } from "./navigationTheme";
import { AfterInteractions } from "react-native-interactions";

const Stack = createStackNavigator();

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          ...headerProps,
        }}
      />
      <Stack.Screen
        name="Contacts Detail"
        component={ContactDetail}
        options={{
          ...headerProps,
          title: "",
        }}
      />

      <Stack.Screen
        name="Create Contact"
        component={AddContact}
        options={{
          ...headerProps,
        }}
      />
      <Stack.Screen
        name="Edit Contact"
        component={EditContact}
        options={{
          ...headerProps,
        }}
      />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;
