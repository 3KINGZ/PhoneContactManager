import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { moderateVerticalScale, scale } from "react-native-size-matters";
import { v4 as uuidv4 } from "uuid";
import { DialPadButton } from "../components";
import { colors } from "../theme";

const dials = [
  {
    id: uuidv4(),
    number: "1",
    string: "%",
  },
  {
    id: uuidv4(),
    number: "2",
    string: "ABC",
  },
  {
    id: uuidv4(),
    number: "3",
    string: "DEF",
  },
  {
    id: uuidv4(),
    number: "4",
    string: "GHI",
  },
  {
    id: uuidv4(),
    number: "5",
    string: "JKL",
  },
  {
    id: uuidv4(),
    number: "6",
    string: "MNO",
  },
  {
    id: uuidv4(),
    number: "7",
    string: "PQRS",
  },
  {
    id: uuidv4(),
    number: "8",
    string: "TUV",
  },
  {
    id: uuidv4(),
    number: "9",
    string: "WXYZ",
  },
  {
    id: uuidv4(),
    number: "*",
    string: "",
  },
  {
    id: uuidv4(),
    number: "0",
    string: "+",
  },
  {
    id: uuidv4(),
    number: "#",
    string: "",
  },
  {
    id: uuidv4(),
  },
  {
    id: uuidv4(),
    number: "#",
    string: "phone",
  },
  {
    id: uuidv4(),
    string: "delete",
  },
];

export const DialPadScreen = () => {
  const [number, setNumber] = useState("");

  const add = (string: string) => {
    const conc = number + string;
    setNumber(conc);
  };

  const _delete = () => {
    const num = number.slice(0, number.length - 1);
    setNumber(num);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>{number}</Text>
      <FlatList
        style={styles.buttons}
        data={dials}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DialPadButton dial={item} onChange={add} onDelete={_delete} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.BG },
  inputText: {
    alignSelf: "center",
    fontSize: scale(30),
    fontWeight: "bold",
    marginVertical: moderateVerticalScale(60),
    color: colors.grey,
  },
  buttons: {
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
});
