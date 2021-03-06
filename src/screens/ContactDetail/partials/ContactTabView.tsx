import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { colors, fontSize } from "../../../theme";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import Details from "./Details";
import CallLogs from "./CallLogs";

const initialLayout = { width: Dimensions.get("window").width };

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: colors.BG,
      borderColor: colors.primary,
      borderWidth: 1,
    }}
    style={{
      backgroundColor: colors.BG,
      width: "70%",
      alignSelf: "center",
      elevation: 0,
    }}
    renderLabel={({ route, focused }) => (
      <Text
        style={{
          color: focused ? colors.primary : colors.lightGrey,
          fontSize: fontSize.regular,
          fontWeight: "bold",
        }}
      >
        {route.title}
      </Text>
    )}
  />
);

interface IContactTabView {
  id: string;
  number: string;
  email: string;
  logs: {
    id: string;
    contactId: string;
    name: string;
    number: string;
    time: string;
    type: string;
  }[];
}

export const ContactTabView = ({
  number,
  email,
  logs,
  id,
}: IContactTabView) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Details" },
    { key: "second", title: "Call Logs" },
  ]);

  const renderScene = SceneMap({
    first: () => <Details id={id} email={email} phoneNumber={number} />,
    second: () => <CallLogs logs={logs} />,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 100,
    width: "80%",
  },
});
