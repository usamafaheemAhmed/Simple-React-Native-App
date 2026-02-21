import React from "react";
import { View, Text } from "react-native";
import CustomCard from "../components/CustomCard";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CustomCard />
    </View>
  );
}
