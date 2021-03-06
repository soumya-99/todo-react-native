import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todo App</Text>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 35,
        backgroundColor: '#428df5',
    },
    title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
});
