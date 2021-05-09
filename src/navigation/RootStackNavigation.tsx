import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppTabNavigator from "./AppTabNavigator";
import CallStackNavigator from "./CallStackNavigator";

const Stack = createStackNavigator();

const RootStackNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="App"
        component={AppTabNavigator}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen
        name="Call"
        component={CallStackNavigator}
        options={{ animationEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
