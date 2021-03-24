import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import Practice from "./practice";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>This is the components screen</Text>
      {/* <Text>{greeting}</Text>
      {textElement} */}

      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" 
      />

      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
