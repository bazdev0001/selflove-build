import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>selfLove Build — Lumière Yoga</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
