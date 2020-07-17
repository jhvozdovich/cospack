"use strict"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StatusBar() {
  return (
    <View style={[styles.container]}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: "black",
  },
});
