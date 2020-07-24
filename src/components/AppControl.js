"use strict"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header";
import CosplayControl from "./CosplayControl";
import { StatusBar } from 'expo-status-bar';

export default function AppControl() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} >
        <Header />
      </View>
      <View style={{ flex: 10 }} >
        <CosplayControl />
      </View>
    </View>
  );
};
