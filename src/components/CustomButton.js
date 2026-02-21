import React from "react";
import { Button } from "react-native-paper";

export default function CustomButton({ title, onPress }) {
  return (
    <Button
      mode="contained"
      style={{ marginVertical: 10 }}
      onPress={onPress}
    >
      {title}
    </Button>
  );
}
