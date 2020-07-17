"use strict"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppControl from "./AppControl";
import StatusBar from "./StatusBar"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <AppControl />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
