import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RecentScreen, RecentsDetail } from "../screens";
import { colors, fontSize } from "../theme";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Stack = createStackNavigator();

const RecentStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recent"
        component={RecentScreen}
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
      <Stack.Screen name="Recent Detail" component={RecentsDetail} />
    </Stack.Navigator>
  );
};

export default RecentStackNavigator;
