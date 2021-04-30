import React, { useState, useLayoutEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Contact, SearchBar } from "../components";
import { colors, fontSize } from "../theme";
import contacts from "../utils/constants/contacts";
import Icon from "react-native-vector-icons/AntDesign";
import routes from "../navigation/routes";
import { scale } from "react-native-size-matters";

const Seperator = () => {
  return <View style={{ paddingVertical: 5 }} />;
};

export const ContactsScreen = ({ navigation }: any) => {
  const [filteredContacts, setFilteredContacts] = useState(contacts);

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
