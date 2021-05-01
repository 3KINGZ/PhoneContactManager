import "react-native-gesture-handler";
import "react-native-get-random-values";
import "react-native-pager-view";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import RootStackNavigation from "./src/navigation/RootStackNavigation";

import store from "./src/store";
import { colors } from "./src/theme";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        animated={true}
        backgroundColor={colors.BG}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
