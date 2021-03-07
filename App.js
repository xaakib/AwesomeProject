import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Colorss}>Xvideos.com</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"red",
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Colorss:{
    color:"red",
    fontSize: "90px",
  }
});
