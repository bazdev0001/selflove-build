import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '../../constants/colors';

export default function TabLayout(): React.JSX.Element {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopColor: Colors.border,
          paddingBottom: 4,
        },
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: '600',
          letterSpacing: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Home', tabBarLabel: 'Home' }}
      />
      <Tabs.Screen
        name="templates"
        options={{ title: 'Templates', tabBarLabel: 'Templates' }}
      />
      <Tabs.Screen
        name="mockups"
        options={{ title: 'App Mockups', tabBarLabel: 'Mockups' }}
      />
      <Tabs.Screen
        name="booking"
        options={{ title: 'Book a Class', tabBarLabel: 'Booking' }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile', tabBarLabel: 'Profile' }}
      />
    </Tabs>
  );
}
