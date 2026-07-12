import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/colors';

interface Mockup {
  id: string;
  name: string;
  description: string;
  accentColor: string;
  screens: string[];
}

const MOCKUPS: Mockup[] = [
  {
    id: '01',
    name: 'Onboarding',
    description: 'Welcome flow with brand story and membership options',
    accentColor: Colors.primary,
    screens: ['Welcome', 'Our Story', 'Choose Plan', 'Get Started'],
  },
  {
    id: '02',
    name: 'Class Booking',
    description: 'Schedule browser with teacher profiles and GBP pricing',
    accentColor: Colors.secondary,
    screens: ['Today\'s Schedule', 'Class Detail', 'Booking Confirm', 'My Bookings'],
  },
  {
    id: '03',
    name: 'Meditation Player',
    description: 'Audio player with ambient visuals and breathing guide',
    accentColor: Colors.sage,
    screens: ['Library', 'Now Playing', 'Breathe', 'Progress'],
  },
  {
    id: '04',
    name: 'Progress Dashboard',
    description: 'Practice streak tracker with milestones and achievements',
    accentColor: Colors.accent,
    screens: ['Dashboard', 'Weekly View', 'Achievements', 'Journal'],
  },
];

export default function MockupsScreen(): React.JSX.Element {
  const [selected, setSelected] = useState<string>('01');
  const activeMockup = MOCKUPS.find((m) => m.id === selected) ?? MOCKUPS[0];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>App Mockups</Text>
        <Text style={styles.subtitle}>4 mobile screen designs for Lumière Yoga</Text>
      </View>

      {/* Tab selector */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs}>
        {MOCKUPS.map((mockup) => (
          <TouchableOpacity
            key={mockup.id}
            style={[
              styles.tab,
              selected === mockup.id && { backgroundColor: activeMockup.accentColor },
            ]}
            onPress={(): void => setSelected(mockup.id)}
          >
            <Text
              style={[
                styles.tabText,
                selected === mockup.id && styles.tabTextActive,
              ]}
            >
              {mockup.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Phone mockup */}
      <View style={styles.phoneFrame}>
        <View style={[styles.phoneScreen, { backgroundColor: activeMockup.accentColor }]}>
          <View style={styles.dynamicIsland} />
          <Text style={styles.screenTitle}>{activeMockup.name}</Text>
          <Text style={styles.screenDescription}>{activeMockup.description}</Text>

          {activeMockup.screens.map((screen, index) => (
            <View key={index} style={styles.screenItem}>
              <View style={styles.screenDot} />
              <Text style={styles.screenName}>{screen}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoTitle}>{activeMockup.name} Screens</Text>
        <Text style={styles.infoText}>{activeMockup.description}</Text>
        <Text style={styles.infoDetail}>
          {activeMockup.screens.length} screen designs · phone-framed mockup (390px) ·
          open templates/apps-templates/{activeMockup.id.padStart(2, '0')}-{activeMockup.name.toLowerCase().replace(/\s/g, '-')}/
          index.html in browser for full preview
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    padding: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  tabs: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  tabTextActive: {
    color: Colors.white,
    fontWeight: '700',
  },
  phoneFrame: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  phoneScreen: {
    width: 260,
    minHeight: 440,
    borderRadius: 36,
    padding: 20,
    paddingTop: 28,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },
  dynamicIsland: {
    width: 90,
    height: 26,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 13,
    alignSelf: 'center',
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: 6,
  },
  screenDescription: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    marginBottom: 20,
    lineHeight: 18,
  },
  screenItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 10,
    borderRadius: 10,
  },
  screenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.white,
    marginRight: 10,
    opacity: 0.8,
  },
  screenName: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '500',
  },
  info: {
    margin: 20,
    marginTop: 24,
    padding: 16,
    backgroundColor: Colors.surface,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: Colors.text,
    marginBottom: 8,
  },
  infoDetail: {
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 17,
  },
});
