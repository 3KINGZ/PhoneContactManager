import React from "react";
import { View, Text, FlatList } from "react-native";

const contacts = [
  {
    name: "Amilia Elie",
    address: "South Sylhet",
    email: "amiliaelie@gmail.com",
    number: "+880 33456 777",
  },
  {
    name: "Allison Becker",
    address: "Rio de janeiro, Brazil ",
    email: "abecker@gmail.com",
    number: "+880 33456 777",
  },
  {
    name: "Sergio Ramos",
    address: "Madrid, Spain",
    email: "ramos@gmail.com",
    number: "+880 33456 777",
  },
  {
    name: "Marco Verrati",
    address: "Rome, Italy",
    email: "mverrati@gmail.com",
    number: "+880 33456 777",
  },
  {
    name: "Kylian Mbappe",
    address: "Paris, France",
    email: "amiliaelie@gmail.com",
    number: "+880 33456 777",
  },
  {
    name: "Trent Arnold",
    address: "Liverpool, England",
    email: "tarnold@gmail.com",
    number: "+880 33456 777",
  },
  {
    name: "Wilfred Ndidi",
    address: "Lagos, Nigeria",
    email: "wilNdidi@gmail.com",
    number: "+234 33456 777",
  },
  {
    name: "Zlatan Ibrahimovic",
    address: "Sweden",
    email: "zIbra@gmail.com",
    number: "+122 33456 777",
  },
];

export const ContactsScreen = () => {
  return (
    <View>
      <Text>ContactsScreen</Text>
      <FlatList data={contacts} />
    </View>
  );
};
