import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header";
import CosplayControl from "./CosplayControl";

export default function AppControl() {
  return (
    <View style={styles.container}>
      <Header style={{ flex: 1 }} />
      <CosplayControl style={{ flex: 5 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
