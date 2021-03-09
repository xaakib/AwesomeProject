import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.Colorss}>deep you go to xnxx.com</Text>

      <Text style={styles.Colorss}>deep you go to xnxx.com</Text>
      <Button
        onPress={apimanagement}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "red",
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Colorss: {
    color: "white",
    fontSize: "20px",
    margin: "10",
    fontWeight: "bold",
    backgroundColor: "red"
  }
});
