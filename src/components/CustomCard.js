import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Pressable,
  Dimensions,
} from "react-native";
import { Avatar, Button, Text } from "react-native-paper";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 300;

export default function CustomCard() {
  const shineAnim = useRef(new Animated.Value(-CARD_WIDTH)).current;

  const runShine = () => {
    shineAnim.setValue(-CARD_WIDTH);

    Animated.timing(shineAnim, {
      toValue: CARD_WIDTH,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  const shineTranslate = {
    transform: [{ translateX: shineAnim }, { rotate: "35deg" }],
  };

  return (
    <Pressable onPress={runShine}>
      <View style={styles.wrapper}>
        {/* Card */}
        <View style={styles.card}>
          {/* Shine Effect */}
          <Animated.View style={[styles.shine, shineTranslate]} />

          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.name}>Usama Faheem Ahmed</Text>

            <Text style={styles.designation}>Software Engineer</Text>

            <Text style={styles.paragraph}>
              I am a MERN Stack Developer passionate about building scalable,
              user-focused web applications with clean and efficient code.
              Specializing in React, Node.js, and cloud platforms.
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 10,
                marginTop: 20,
              }}
            >
              <Button mode="contained" icon={"phone"} onPress={() => {}}>
                Connect 
              </Button>
              <Button mode="outlined" icon={"message-text"} onPress={() => {}}>
                Message
              </Button>
            </View>
          </View>
        </View>

        {/* Avatar */}
        <Avatar.Image
          source={require("../../assets/images/Usama.png")}
          size={80}
          style={styles.avatar}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: "center",
  },

  card: {
    backgroundColor: "white",
    height: CARD_HEIGHT,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 20,
    overflow: "hidden",
    elevation: 4,
  },

  avatar: {
    position: "absolute",
    left: "40%",
    top: -5,
    marginTop: -40,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#381E72",
    textAlign: "center",
  },

  designation: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
    color: "#381E72",
  },

  paragraph: {
    fontSize: 14,
    color: "#381E72",
  },

  shine: {
    position: "absolute",
    width: 80,
    height: "200%",
    backgroundColor: "rgba(255,255,255,0.4)",
    opacity: 0.6,
  },
});
