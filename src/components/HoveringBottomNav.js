import React, { useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
// Adjust this based on your padding/margins. 
// Since we have 4 items and horizontal padding, we'll calculate a fixed width per item.
const TAB_WIDTH = 70; 

export default function HoveringBottomNav({ currentRoute }) {
  const navigation = useNavigation();
  
  const navItems = [
    { name: "Home", icon: "home", route: "Home" },
    { name: "Order", icon: "package-variant", route: "Order" },
    { name: "Reward", icon: "star", route: "Reward" },
    { name: "Profile", icon: "account", route: "Profile" },
  ];

  // Find the index of the current route
  const activeIndex = navItems.findIndex(item => item.route === currentRoute);
  
  // Animation value for the horizontal movement
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Update position whenever activeIndex changes
    // The '+ 10' accounts for the paddingHorizontal of the navBar
    Animated.spring(translateX, {
      toValue: activeIndex * TAB_WIDTH,
      useNativeDriver: true,
    }).start();
  }, [activeIndex]);

  const animatedStyle = {
    transform: [{ translateX }],
  };

  const handlePress = (route) => {
    navigation.reset({
      index: 0,
      routes: [{ name: route }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {/* Sliding Background Indicator */}
        <Animated.View style={[styles.slidingBg, animatedStyle]} />

        {navItems.map((item) => {
          const isActive = currentRoute === item.route;
          return (
            <TouchableOpacity
              key={item.route}
              style={styles.navItem}
              onPress={() => handlePress(item.route)}
              activeOpacity={0.8}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={24}
                color={isActive ? "#FFF" : "#051C64"}
              />
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
    backgroundColor: "#FFF", // Added white bg so you can see the shadow/pill
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    position: 'relative',
  },
  navItem: {
    width: TAB_WIDTH,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2, // Keep icons above the sliding background
  },
  slidingBg: {
    position: "absolute",
    top: 8, // Matches navBar paddingVertical
    left: 21.5, // Matches navBar paddingHorizontal
    width: TAB_WIDTH/1.5, // Slightly smaller than navItem width for a nice fit
    height: 48, // Matches navItem height
    backgroundColor: "#051C64",
    borderRadius: 40,
    zIndex: 1,
  },
});
