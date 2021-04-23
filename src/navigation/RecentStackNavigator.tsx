import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RecentScreen, RecentsDetail } from "../screens";
import { headerProps } from "./navigationTheme";

const Stack = createStackNavigator();

const RecentStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recent"
        component={RecentScreen}
        options={{
          ...headerProps,
        }}
      />
      <Stack.Screen name="Recent Detail" component={RecentsDetail} />
    </Stack.Navigator>
  );
};

export default RecentStackNavigator;
