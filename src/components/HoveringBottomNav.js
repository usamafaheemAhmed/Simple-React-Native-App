import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HoveringBottomNav({ currentRoute }) {
  const navigation = useNavigation();
  
  const navItems = [
    { name: "Home", icon: "home", route: "Home" },
    { name: "Order", icon: "package-variant", route: "Order" },
    { name: "Reward", icon: "star", route: "Reward" },
    { name: "Profile", icon: "account", route: "Profile" },
  ];

  const handlePress = (route) => {
    navigation.reset({
      index: 0,
      routes: [{ name: route }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {navItems.map((item) => {
          const isActive = currentRoute === item.route;
          return (
            <TouchableOpacity
              key={item.route}
              style={[styles.navItem, isActive && styles.activeItem]}
              onPress={() => handlePress(item.route)}
              activeOpacity={0.8}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={24}
                  color={isActive ? "#FFF" : "#888"}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "box-none",
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "#051C64",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  navItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  activeItem: {
    backgroundColor: "#7cddcc",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
