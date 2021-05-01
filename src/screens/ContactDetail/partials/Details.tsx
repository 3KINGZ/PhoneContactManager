import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Detail } from "../../../components";

interface IDetails {
  id: string;
  email: string;
  phoneNumber: string;
}

const Details = ({ id, email, phoneNumber }: IDetails) => {
  return (
    <View style={styles.container}>
      <Detail type="phone" emailPhone={phoneNumber} id={id} />
      <Detail type="email" emailPhone={email} id={id} />
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
