import React from "react";
import { View, FlatList } from "react-native";
import contactImages from "../assets/images";
import Contact from "../components/Contact/Contact";
import { colors } from "../theme";

const contacts = [
  {
    name: "Amilia Elie",
    address: "South Sylhet",
    email: "amiliaelie@gmail.com",
    number: "+880 33456 777",
    image: contactImages.image2,
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
    image: contactImages.image4,
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
    image: contactImages.image5,
  },
  {
    name: "Wilfred Ndidi",
    address: "Lagos, Nigeria",
    email: "wilNdidi@gmail.com",
    number: "+234 33456 777",
    image: contactImages.image3,
  },
  {
    name: "Zlatan Ibrahimovic",
    address: "Sweden",
    email: "zIbra@gmail.com",
    number: "+122 33456 777",
    image: contactImages.image1,
  },
];

const Seperator = () => {
  return <View style={{ paddingVertical: 5 }} />;
};

export const ContactsScreen = () => {
  return (
    <View
      style={{ flex: 1, paddingHorizontal: 15, backgroundColor: colors.BG }}
    >
      <FlatList
        data={contacts}
        renderItem={({ item }) => <Contact contact={item} />}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
};
