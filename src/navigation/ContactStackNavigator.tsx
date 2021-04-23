import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactsScreen, ContactDetail } from "../screens";
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
      <Stack.Screen name="Contacts Detail" component={ContactDetail} />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;
