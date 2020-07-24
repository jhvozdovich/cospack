"use strict"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppControl from "./AppControl";


// CHECK STATUS BAR FROM REACT TEMPLATE WALKTRHOUGH/AUTO APP ON CREATE

export default function App() {
  return (
    <View style={styles.container}>
     
      <AppControl />
      <StatusBar  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
