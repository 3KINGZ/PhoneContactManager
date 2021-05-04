import React, { useLayoutEffect } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OptionsMenu from "react-native-option-menu";

import { colors, fontSize } from "../theme";
import { MoreIcon, Recents } from "../components";

export const RecentScreen = ({ navigation }: any) => {
  const history = useSelector((state: any) => state.history.history);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <OptionsMenu
          customButton={MoreIcon}
          destructiveIndex={1}
          options={["Delete all call logs"]}
          actions={[() => console.log("Add to favourites")]}
        />
      ),
    });
  }, [navigation]);

  console.log(history);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.BG}
        barStyle="dark-content"
      />
      <Recents logs={history} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: colors.BG,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: fontSize.extralarge,
    fontFamily: "SourceSerifPro-SemiBold",
  },
});
