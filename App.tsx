/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import "react-native-gesture-handler";
import "react-native-get-random-values";
import "react-native-pager-view";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppTabNavigation from "./src/navigation/AppTabNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <AppTabNavigation />
    </NavigationContainer>
  );
};

export default App;
