import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Practice = () => {
  const yourName = 'Mathew';

  return <View>
    <Text style={styles.headerStyle}>Getting started with react native!</Text>
    <Text style={styles.subHeaderStyle}>My name is {yourName}</Text>
  </View>
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
})

export default Practice;