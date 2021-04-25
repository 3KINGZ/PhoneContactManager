import React, { useLayoutEffect } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Recent } from "../components/Recent";
import { colors, fontSize } from "../theme";
import Icon from "react-native-vector-icons/Feather";
import recents from "../utils/constants/recents";
import { Recents } from "../components";

const data = [
  {
    id: 1,
    name: "Sujon Bro",
    type: "received",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
  {
    id: 2,
    name: "Nitu Metro",
    type: "outgoing",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
  {
    id: 3,
    name: "Allison Beaker",
    type: "received",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
  {
    id: 4,
    name: "Adward Christiano",
    type: "missed",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
  {
    id: 5,
    name: "Allison Beaker",
    type: "outgoing",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
  {
    id: 6,
    name: "Mike Watson",
    type: "outgoing",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
  {
    id: 7,
    name: "Shuvo Cold",
    type: "received",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
  {
    id: 8,
    name: "Adward Christiano",
    type: "missed",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
  {
    id: 9,
    name: "Allison Beaker",
    type: "outgoing",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
  {
    id: 10,
    name: "Adward Christiano",
    type: "missed",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
  {
    id: 11,
    name: "Allison Beaker",
    type: "outgoing",
    time: "Today 9:45AM",
    number: "+880 33456 777",
  },
];

const Seperator = () => (
  <View style={{ borderColor: colors.lightGrey, borderWidth: 0.5 }} />
);

export const RecentScreen = ({ navigation }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Icon name="more-vertical" size={fontSize.large} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
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
