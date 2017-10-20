import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999",
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home App</Text>
  </View>
);

export default HomeScreen;
