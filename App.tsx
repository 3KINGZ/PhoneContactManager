import "react-native-gesture-handler";
import "react-native-get-random-values";
import "react-native-pager-view";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import RootStackNavigation from "./src/navigation/RootStackNavigation";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
