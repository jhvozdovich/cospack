"use strict"
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import CosplayList from "./cosplays/CosplayList";
import EventList from "./events/EventList";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CosPack" component={Home} />
        <Stack.Screen name="CosplayList" component={CosplayList} options={{ title: "Cosplays" }} />
        <Stack.Screen name="EventList" component={EventList} options={{ title: "Events" }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});

const Stack = createStackNavigator();

