import React from "react";
import { View, StyleSheet } from "react-native";
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
      {email ? <Detail type="email" emailPhone={email} id={id} /> : null}
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
