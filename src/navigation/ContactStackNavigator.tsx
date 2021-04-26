import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactsScreen, ContactDetail, AddContact } from "../screens";
import { headerProps } from "./navigationTheme";

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
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;
