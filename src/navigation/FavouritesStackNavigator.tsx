import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactDetail, Favourites } from "../screens";
import { headerProps } from "./navigationTheme";
import routes from "./routes";

const Stack = createStackNavigator();

const FavouritesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.FAVOURITES}
        component={Favourites}
        options={{
          ...headerProps,
        }}
      />
      <Stack.Screen
        name={routes.FAVOURITES_CONTACT_DETAIL}
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
