import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Header Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
