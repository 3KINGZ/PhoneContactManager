import React, { useState, useLayoutEffect } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Favourite, SearchBar } from "../components";
import { colors, fontSize } from "../theme";
import favourites from "../utils/constants/favourites";
import Icon from "react-native-vector-icons/AntDesign";

export const Favourites = ({ navigation }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Icon
            style={{ paddingRight: 15 }}
            name="plus"
            size={fontSize.large}
            color={colors.primary}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [filteredFavourites, setFavouritesContacts] = useState(favourites);

  const filterFavourites = (search: string) => {
    setFavouritesContacts(
      search === ""
        ? favourites
        : favourites.filter((contact: { name: string }) =>
            contact.name.toLowerCase().includes(search.toLowerCase()),
          ),
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar onChange={filterFavourites} />
      <FlatList
        style={{ alignSelf: "center" }}
        data={filteredFavourites}
        numColumns={2}
        keyExtractor={(item) => item.contactId}
        renderItem={({ item }) => <Favourite contact={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BG,
    flex: 1,
    paddingHorizontal: 10,
  },
});
