import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CallScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

const CallStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={routes.CALL_OUTGOING} component={CallScreen} />
    </Stack.Navigator>
  );
};

export default CallStackNavigator;
