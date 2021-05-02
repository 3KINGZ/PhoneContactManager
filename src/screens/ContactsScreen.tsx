import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";

import routes from "../navigation/routes";
import { Contact, SearchBar } from "../components";
import { colors } from "../theme";

const Seperator = () => {
  return <View style={{ paddingVertical: 5 }} />;
};

export const ContactsScreen = ({ navigation }: any) => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    const sortContacts: any = contacts.sort(
      (a: { name: string }, b: { name: string }) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
    );
    setFilteredContacts(sortContacts);
  }, [contacts]);

  const filterContacts = (search: string) => {
    setFilteredContacts(
      search === ""
        ? contacts
        : contacts.filter((contact: { name: string }) =>
            contact.name.toLowerCase().includes(search.toLowerCase()),
          ),
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.CREATE_CONTACT)}
        >
          <Icon
            style={{ paddingRight: 15 }}
            name="plus"
            size={scale(22)}
            color={colors.primary}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 15, backgroundColor: colors.BG }}
    >
      <SearchBar onChange={filterContacts} />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.contactId}
        renderItem={({ item }) => <Contact contact={item} />}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
};
