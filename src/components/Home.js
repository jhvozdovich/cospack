"use strict"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",

  }
});