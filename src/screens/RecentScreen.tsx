import React, { useLayoutEffect } from "react";
import { View, TouchableOpacity, StatusBar, StyleSheet } from "react-native";
import { colors, fontSize } from "../theme";
import Icon from "react-native-vector-icons/Feather";
import recents from "../utils/constants/recents";
import { Recents } from "../components";

export const RecentScreen = ({ navigation }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Icon
            name="more-vertical"
            size={fontSize.large}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.BG}
        barStyle="dark-content"
      />
      <Recents logs={recents} />
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
