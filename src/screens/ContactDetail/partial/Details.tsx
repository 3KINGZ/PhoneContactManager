import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Detail } from "../../../components";

interface IDetails {
  email: string;
  phoneNumber: string;
}

const Details = ({ email, phoneNumber }: IDetails) => {
  return (
    <View style={styles.container}>
      <Detail type="phone" emailPhone={phoneNumber} />
      <Detail type="email" emailPhone={email} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default Details;
