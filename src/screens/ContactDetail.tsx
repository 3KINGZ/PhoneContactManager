import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { colors, fontSize } from "../theme";
import contacts from "../utils/constants/contacts";
import { TabView, SceneMap } from "react-native-tab-view";

//install react-native-pager-view

const Details = () => {
  return <Text>Details</Text>;
};

const Logs = () => {
  return <Text>Logs</Text>;
};

export const ContactDetail = ({ route }: any) => {
  const layout = useWindowDimensions();
  const [contact, setContact] = useState<IContact | any>({});

  useEffect(() => {
    const contact = contacts.find(
      (contact: IContact) => contact.contactId === route.params.id,
    );
    setContact(contact);
  }, []);

  const { name, image, address } = contact;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const renderScene = SceneMap({
    first: Details,
    second: Logs,
  });

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: fontSize.large }}>{name}</Text>
      <Text style={{ fontSize: fontSize.regular, color: colors.grey }}>
        {address}
      </Text>
      <Image
        source={image}
        style={{ width: 200, height: 300, marginTop: 20 }}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    alignItems: "center",
  },
});
