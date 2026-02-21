import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({ navigation }) {
  let [counter, setCounter] = React.useState(0);

  return (
    <View style={{ flex:1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>Home Screen</Text>
      <Text style={{ fontSize: 22 }}>Counter: {counter}</Text>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <CustomButton
          title="Counter +1"
          onPress={() => setCounter((prev) => prev + 1)}
        />
        <CustomButton
          title="Counter -1"
          onPress={() => setCounter((prev) => prev - 1)}
        />
      </View>
      <CustomButton
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
