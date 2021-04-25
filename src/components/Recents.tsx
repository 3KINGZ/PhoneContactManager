import React from "react";
import { View, FlatList } from "react-native";
import { colors } from "../theme";
import { Recent } from "./Recent";

const Seperator = () => (
  <View style={{ borderColor: colors.lightGrey, borderWidth: 0.5 }} />
);

export const Recents = ({ logs }: { logs: [{ id: string }] }) => {
  return (
    <FlatList
      data={logs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Recent details={item} />}
      ItemSeparatorComponent={Seperator}
    />
  );
};
