"use strict"
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Test-InsertLogo</Text>
      <View style={styles.buttons}>
        <Button
          onPress={() => {
            alert("PRESSED COSPLAYS!")
          }}
          title="Cosplays"
          accessibilityLabel="Access the cosplay list"
        />
        <Text></Text>
        <Button
          onPress={() => {
            alert("PRESSED EVENTS!")
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
