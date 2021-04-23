import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DialPadScreen,
  RecentScreen,
  ContactsScreen,
  Favourites,
} from "../screens";
import { TabIcon } from "../components";

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
        component={RecentScreen}
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
        component={ContactsScreen}
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
