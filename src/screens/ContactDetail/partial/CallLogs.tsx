import React from "react";
import { View, StyleSheet } from "react-native";
import { Recents } from "../../../components";

const CallLogs = ({ logs }: { logs: [] }) => {
  return (
    <View style={styles.container}>
      <Recents logs={logs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CallLogs;
