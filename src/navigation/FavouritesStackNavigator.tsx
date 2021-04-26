import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactDetail, Favourites } from "../screens";
import { headerProps } from "./navigationTheme";

const Stack = createStackNavigator();

const FavouritesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{
          ...headerProps,
        }}
      />
      <Stack.Screen
        name="Contacts Detail Fav"
        component={ContactDetail}
        options={{
          ...headerProps,
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default FavouritesStackNavigator;
