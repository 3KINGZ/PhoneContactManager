import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactsScreen, ContactDetail } from "../screens";
import { fontSize, colors } from "../theme";

const Stack = createStackNavigator();

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          headerTitleStyle: {
            fontSize: fontSize.extralarge,
            fontFamily: "SourceSerifPro-SemiBold",
          },
          headerStyle: {
            backgroundColor: colors.BG,
          },
        }}
      />
      <Stack.Screen name="ContactsDetail" component={ContactDetail} />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;
