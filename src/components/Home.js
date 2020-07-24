"use strict"
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Test-InsertLogo</Text>
      <View style={styles.buttons}>
        <Button
          onPress={() =>
            navigation.navigate("CosplayList")
          }
          title="Cosplays"
          accessibilityLabel="Access the cosplay list"
        />
        <Text></Text>
        <Button
          onPress={() => {
            navigation.navigate("EventList")
          }}
          title="Events"
          color="cornflowerblue"
          accessibilityLabel="Access the cosplay list"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignContent: "center"
  },
  buttons: {
    width: "80%",
    margin: "10%",
    marginTop: "120%"
  }
});
