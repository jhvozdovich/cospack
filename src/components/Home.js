import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Test</Text>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: 1
});
