import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inbox from "../screens/Inbox";
import { Ionicons } from "@expo/vector-icons";
import CustomTab from '../components/CustomTabs'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarActiveBackgroundColor: "#ff7f50",
      }}
      
    >
      <Tab.Screen
        name="inbox"
        component={Inbox}
        options={{
          headerTitle: "Inbox",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#ff7f50",
          },
          headerTintColor: "#deb887",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles-outline" size={size} color={"#a9a9a9"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
