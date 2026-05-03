import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrderScreen from "../screens/OrderScreen";
import RewardScreen from "../screens/RewardScreen";
import CustomNavigationBar from "../components/CustomNavigationBar";
import HoveringBottomNav from "../components/HoveringBottomNav";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const navigationRef = React.useRef();
  const [currentRoute, setCurrentRoute] = React.useState("Home");

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state) => {
        if (state?.routes) {
          const route = state.routes[state.index]?.name;
          setCurrentRoute(route);
        }
      }}
    >
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Reward" component={RewardScreen} />
        </Stack.Navigator>

        <HoveringBottomNav currentRoute={currentRoute} />
      </View>
    </NavigationContainer>
  );
}
