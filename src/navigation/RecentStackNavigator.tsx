import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RecentScreen, RecentsDetail } from "../screens";
import { headerProps } from "./navigationTheme";
import routes from "./routes";

const Stack = createStackNavigator();

const RecentStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.RECENT}
        component={RecentScreen}
        options={{
          ...headerProps,
        }}
      />
      <Stack.Screen name={routes.RECENT_DETAIL} component={RecentsDetail} />
    </Stack.Navigator>
  );
};

export default RecentStackNavigator;
