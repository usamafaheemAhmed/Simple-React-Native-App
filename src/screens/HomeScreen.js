import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import { Card, Icon, Title } from "react-native-paper";
import ServiceCards from "../components/ServiceCards";
import Svg, { G, Path } from "react-native-svg";

const HomeCards = [
  {
    Title: "Reward Points",
    Points: 450,
    iconMain: (
      <Svg width="20" height="20" viewBox="0 0 100 130">
        <Path
          d="M50 5 C50 5 15 50 15 85 A35 35 0 0 0 85 85 C85 50 50 5 50 5Z"
          fill="#5D69EB"
        />
        <Path
          d="M72 70 A22 22 0 0 1 72 95"
          stroke="white"
          strokeWidth={5}
          strokeLinecap="round"
          fill="none"
          opacity={0.8}
        />
      </Svg>
    ),
    icon: (
      <Svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </Svg>
    ),
    subIconColor: "#FFD56B",
    linktext: "Redeem Rewards",
    width: "50%",
  },
  {
    Title: "Referral Rewards",
    Points: 200,
    width: "50%",
    iconMain: (
      <Svg
        width="20"
        height="20"
        viewBox="125 125 800 800"
        version="1.1"
        fill="#000000"
        stroke="#000000"
        strokeWidth={0.01024}
      >
        <G id="SVGRepo_bgCarrier" strokeWidth={0}></G>
        <G
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            d="M899 369.3v105.4c0 16.6-13.6 30.1-30.1 30.1H609.1V339.2H869c16.4 0 30 13.5 30 30.1zM842.8 752.3v123c0 16.6-13.5 30.1-30.1 30.1h-123l153.1-153.1zM842.8 571.1v136.5l-198 197.8h-68.9v-67.6zM842.8 516.9v9.4L575.9 793.1V672.5l155.8-155.6z"
            fill="#5D69EB"
          ></Path>
          <Path
            d="M690 167.9c44 0 79.6 35.8 79.6 79.6 0 44-35.7 79.6-79.6 79.6H526.2l54-81.6c39-53.6 64-77.6 109.8-77.6z"
            fill="#4c56bd"
          ></Path>
          <Path d="M686.9 516.9l-111 110.9V516.9z" fill="#5D69EB"></Path>
          <Path
            d="M597 339.2v165.6H429.4V339.2h84.4l0.1 0.1v-0.1h12.3zM573 114.5c22.8 39.5 19.3 79.4-11.8 133.2l-47.3 70.1-80.7-119.6c-10.4-18.1-13-40.8-7-62.4s19.9-39.9 38.2-50.4c12.2-7.1 25.8-10.7 39.6-10.7 6.9 0 13.9 0.8 20.7 2.7 20.6 5.5 37.7 18.8 48.3 37.1zM461.5 516.9h102.4v388.5H461.5zM449.7 245.5l54.1 81.7H339.9c-43.9 0-79.6-35.7-79.6-79.6 0-43.9 35.8-79.6 79.6-79.6 45.8-0.1 71 23.9 109.8 77.5z"
            fill="#4c56bd"
          ></Path>
          <Path
            d="M449.4 754.8v150.6H299zM449.4 573.6v136.5L254.2 905.4h-36.9c-16.6 0-30.1-13.5-30.1-30.1v-39.4l262.2-262.3zM449.4 516.9v12L187.2 791.2V670.6l153.7-153.7zM417.4 339.2v165.7H161.1c-16.6 0-30.1-13.5-30.1-30.1V369.3c0-16.6 13.5-30.1 30.1-30.1h256.3zM296.2 516.9l-109 109v-109z"
            fill="#5D69EB"
          ></Path>
          <Path
            d="M296.2 516.9h-109v109l109-109z m44.7 0L187.2 670.6v120.6l262.3-262.3v-12H340.9zM299 905.4h150.5V754.8L299 905.4z m40.9-566.2H161.1c-16.6 0-30.1 13.5-30.1 30.1v105.4c0 16.6 13.5 30.1 30.1 30.1h256.2V339.2h-77.4z m-79.6-91.7c0 44 35.8 79.6 79.6 79.6h163.8l-54.1-81.7c-38.8-53.6-64-77.6-109.8-77.6-43.7 0.1-79.5 35.9-79.5 79.7z m-43 657.9h36.9l195.3-195.3V573.6L187.2 835.9v39.4c0 16.6 13.5 30.1 30.1 30.1z m625.5-197.8V571.1L575.9 837.8v67.6h68.9l198-197.8z m-266.9 85.5l266.9-266.9v-9.4H731.7L575.9 672.5v120.6z m113.8 112.3h123c16.6 0 30.1-13.5 30.1-30.1v-123L689.7 905.4z m-2.8-388.5h-111v111l111-111zM561.2 247.8c31.1-53.9 34.6-93.7 11.8-133.2-10.6-18.3-27.7-31.6-48.3-37.1-6.9-1.8-13.9-2.7-20.7-2.7-13.9 0-27.5 3.6-39.6 10.7-18.3 10.5-32.2 28.8-38.2 50.4-6 21.6-3.4 44.3 7 62.4l80.7 119.6 47.3-70.1z m2.7 657.6V516.9H461.5v388.5h102.4z m45.2-400.6H869c16.5 0 30.1-13.5 30.1-30.1V369.3c0-16.6-13.6-30.1-30.1-30.1H609v165.6z m-179.7 0H597V339.2h-83.1v0.1l-0.1-0.1h-84.3v165.6z m150.8-259.2l-54 81.6H690c44 0 79.6-35.7 79.6-79.6 0-43.9-35.7-79.6-79.6-79.6-45.8-0.1-70.8 23.9-109.8 77.6z m11.5-35c30.8-37.6 56.5-54.8 98.3-54.8 50.6 0 91.7 41.2 91.7 91.7 0 34.1-18.7 63.9-46.4 79.6h133.6c23.3 0 42.2 18.9 42.2 42.2v105.4c0 23.3-18.9 42.2-42.2 42.2h-14.1v358.4c0 23.3-18.9 42.2-42.2 42.2H217.3c-23.3 0-42.2-18.9-42.2-42.2V516.9h-14c-23.3 0-42.2-18.9-42.2-42.2V369.3c0-23.3 18.9-42.2 42.2-42.2h133.6c-27.7-15.8-46.5-45.5-46.5-79.6 0-50.5 41.2-91.7 91.7-91.7 31 0 53 9.5 74.9 29.5-4.9-16.7-5.2-35.1-0.2-52.8 6.9-24.5 22.8-45.5 43.7-57.6 21.2-12.3 45.9-15.5 69.5-9.2 23.6 6.3 43.4 21.4 55.7 42.6 18.3 31.9 21.1 64.5 8.2 102.3z"
            fill="#fff"
          ></Path>
        </G>
      </Svg>
    ),
    icon: (
      <Svg
        fill="#5D69EB"
        width="14"
        height="14"
        viewBox="-51.2 -51.2 614.40 614.40"
        stroke="#5D69EB"
      >
        <G id="SVGRepo_bgCarrier" strokeWidth={0}></G>
        <G
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z"></Path>
          <Path d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z"></Path>
          <Path d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z"></Path>
          <Path d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z"></Path>
        </G>
      </Svg>
    ),
    subIconColor: "#bdcefa",
    linktext: "Invite & Earn",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          // 1. flexWrap zaroori hai taake cards next line par aa sakein
          flexWrap: "wrap",
          // 2. 'start' ki jagah 'flex-start' use karein (React Native standard)
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          paddingHorizontal: 10,
        }}
      >
        {HomeCards.map((card, index) => (
          <View key={index} style={{ padding: 5, width: card.width }}>
            <ServiceCards
              key={index} // 2 cards per row ke liye 48% width (gap ke liye thoda space chhodein)
              iconMain={card.iconMain}
              icon={card.icon}
              title={card.Title}
              points={card.Points}
              linktext={card.linktext}
              subIconColor={card.subIconColor}
            />
          </View>
        ))}
        <View
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            marginHorizontal: 5,
          }}
        >
          <Card
            style={{
              width: "100%",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 15,
              backgroundColor: "#fff",
            }}
          >
            <View style={{ display: "flex" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Title
                  style={{
                    color: "#051C64",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Today's Water Intake
                </Title>
                <Title
                  style={{
                    color: "#727272",
                    fontSize: 12,
                    textAlign: "right",
                    marginLeft: "auto",
                  }}
                >
                  Goal: 2.5 L
                  <Icon
                    source="square-edit-outline"
                    size={12}
                    color={"#c7c7c7"}
                  />
                </Title>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: "#051C64",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Our support team is here to assist you with any questions or
                issues you may have. Contact us anytime!
              </Text>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
}
