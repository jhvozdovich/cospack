import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header";

export default function AppControl() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>AppControl Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
