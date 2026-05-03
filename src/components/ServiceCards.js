import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-native-paper";
import { View, Text, Animated } from "react-native";

const ServiceCards = ({
  iconMain,
  icon,
  title,
  points,
  linktext,
  width,
  subIconColor,
}) => {
  const [displayPoints, setDisplayPoints] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const listener = animatedValue.addListener(({ value }) => {
      setDisplayPoints(Math.floor(value));
    });

    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: points,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    return () => {
      animatedValue.removeListener(listener);
    };
  }, [points]);

  return (
    <Card
      style={{
        padding: 10,
        marginBottom: 10,
        width: width, // Adjusted to fill container or your preferred width
        backgroundColor: "#eceefc",
        boxShadow: "none",
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* Icon Container */}
        <View
          style={{
            backgroundColor: "#fff",
            width: 35,
            height: 35,
            borderRadius: 35,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
            {iconMain}
          </View>

        {/* Content Container */}
        <View style={{ flex: 1, gap: 4 }}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: "#051C64",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {title}
          </Text>

          {/* Points and Star Row */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#051C64",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {displayPoints}
            </Text>
            <View
              style={{
                backgroundColor: subIconColor,
                padding: 4,
                borderRadius: 6,
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Simple Star Icon */}
              {icon}
            </View>
          </View>

          {/* Link */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: "600",
                color: "#3F51B5",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {linktext}
            </Text>
            <Text style={{ color: "#3F51B5", marginLeft: 5 }}>→</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ServiceCards;
