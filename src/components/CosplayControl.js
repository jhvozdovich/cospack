"use strict"
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Home"

export default function CosplayControl() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
