import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ContactsScreen,
  ContactDetail,
  AddContact,
  EditContact,
} from "../screens";
import { headerProps } from "./navigationTheme";
import routes from "./routes";

const Stack = createStackNavigator();

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.CONTACTS}
        component={ContactsScreen}
        options={{
          ...headerProps,
        }}
      />
      <Stack.Screen
        name={routes.CONTACT_DETAIL}
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
