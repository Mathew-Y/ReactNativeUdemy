import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const greeting = 'Hi there!';
  const mathew = ['dog man', ' cat man'];
  const textElement = <Text>This is a text element assigned to a variable</Text>

  return <View>
    <Text style={styles.text}>This is the components screen</Text>
    <Text>{greeting}</Text>
    {textElement}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 100
  }
});

export default HomeScreen;
