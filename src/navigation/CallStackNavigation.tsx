import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CallScreen } from "../screens";

const Stack = createStackNavigator();

const CallStackNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Call-Outgoing" component={CallScreen} />
    </Stack.Navigator>
  );
};

export default CallStackNavigation;
