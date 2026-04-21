import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function OrderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" }}>
      <MaterialCommunityIcons name="package-variant" size={60} color="#7cddcc" />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20, color: "#051C64" }}>Orders</Text>
      <Text style={{ fontSize: 16, color: "#666", marginTop: 10 }}>No orders yet</Text>
    </View>
  );
}
