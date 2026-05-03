import React from "react";
import { Button } from "react-native-paper";

export default function CustomButton({ title, onPress }) {
  return (
    <Button
      mode="contained"
      style={{ marginVertical: 10, color: "#051C64", backgroundColor:"#cad6fc" }}
      onPress={onPress}
    >
      {title}
    </Button>
  );
}
