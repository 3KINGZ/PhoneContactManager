import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DialPadScreen, Favourites } from "../screens";
import { TabIcon } from "../components";
import RecentStackNavigator from "./RecentStackNavigator";
import ContactStackNavigator from "./ContactStackNavigator";

const Tab = createBottomTabNavigator();

export default function AppTabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 16,
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="DialPad"
        component={DialPadScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="dialpad" active={focused} type="micon" />
          ),
        }}
      />
      <Tab.Screen
        name="Recent"
        component={RecentStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="clock-time-three-outline"
              active={focused}
              type="micon"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="person-outline" active={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="heart-outline" active={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
