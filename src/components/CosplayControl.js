import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Home"

export default function CosplayControl() {
  return (
    <View style={styles.container}>
      <Text>Control Test</Text>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: 1
});
