import React from "react";
import { View, Text } from "react-native";
import { Appbar, Avatar, Badge } from "react-native-paper";

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}) {
  return (
    <Appbar.Header
      elevated={false}
      style={{
        backgroundColor: "transparent",
        paddingHorizontal: 8,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left Side */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        {back ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Appbar.BackAction onPress={navigation.goBack} color="#051C64" />

            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#051C64",
                marginLeft: 4,
              }}
            >
              Back
            </Text>
          </View>
        ) : (
          <>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "#0f0f0f",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Hi, User! 👋
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter, sans-serif",
                color: "#6B7280",
                marginTop: 4,
              }}
            >
              Stay hydrated, stay healthy!
            </Text>
          </>
        )}
      </View>

      {/* Right Side Notification */}
      {!back && (
        <View
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Appbar.Action
            icon="bell-outline"
            size={20}
            color="#051C64"
            onPress={() => {}}
          />

          <Badge
            size={18}
            style={{
              position: "absolute",
              top: 6,
              right: 6,
              backgroundColor: "#5B6EF5",
              color: "#fff",
              fontSize: 10,
              fontWeight: "700",
            }}
          >
            2
          </Badge>
        </View>
      )}
    </Appbar.Header>
  );
}
