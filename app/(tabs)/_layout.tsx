import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6A5ACD', // Lavender color for active tab
        tabBarInactiveTintColor: '#C4C4C4', // Grey color for inactive tabs
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF', // White background for the tab bar
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 80, // Adjusted height for better visibility
          paddingTop: 10, // Adjusted to add space above icons
          paddingBottom: 5, // Added to bring icons slightly down
        },
        tabBarIconStyle: {
          justifyContent: 'center', // Center icons vertically
          alignItems: 'center', // Center icons horizontally
        },
        tabBarLabelStyle: {
          display: 'none', // Hide labels to focus only on icons
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="time-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
