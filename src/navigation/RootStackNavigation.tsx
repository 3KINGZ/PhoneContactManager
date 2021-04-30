import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppTabNavigation from "./AppTabNavigation";
import CallStackNavigation from "./CallStackNavigation";

const Stack = createStackNavigator();

const RootStackNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="App"
        component={AppTabNavigation}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen
        name="Call"
        component={CallStackNavigation}
        options={{ animationEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
