"use strict"
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppControl from "./AppControl";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native"


// CHECK STATUS BAR FROM REACT TEMPLATE WALKTRHOUGH/AUTO APP ON CREATE

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar hidden />
        <AppControl />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
