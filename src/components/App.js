"use strict"
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import CosplayList from "./cosplays/CosplayList";
import EventList from "./events/EventList";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CosplayPack">
        <Stack.Screen name="CosPack" component={Home} options={{
          title: "CosPack",
          headerRight: () => (
            <React.Fragment>
              <Button
                onPress={() => alert("Settings here!")}
                title="Settings"
              />
              <Button
                onPress={() => alert("Login here!")}
                title="Login"
              />
            </React.Fragment>
          )
        }} />
        < Stack.Screen name="CosplayList" component={CosplayList} options={{ title: "Cosplays" }} />
        <Stack.Screen name="EventList" component={EventList} options={{ title: "Events" }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const Stack = createStackNavigator();

