"use strict"
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EventList() {
  return (
    <View style={styles.container}>
      <Text>Event List Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6EBFBC"
  },
});