import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input } from "../components/Input";

export const AddContact = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Add Contact</Text>
      <View style={{ width: "80%", alignSelf: "center" }}>
        <Input
          placeholder="Add Name"
          subtitle="Mobile Number"
          icon="person"
          value={name}
          onChange={(text) => setName(text)}
        />
        <Input placeholder="Add Name" subtitle="Mobile Number" />
        <Input placeholder="Add Name" subtitle="Mobile Number" icon="phone" />
      </View>
    </View>
  );
};
