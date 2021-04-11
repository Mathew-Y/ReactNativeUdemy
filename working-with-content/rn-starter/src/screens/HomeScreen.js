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
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Image")}>
        <Text>Go to Image Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Counter")}>
        <Text>Go to Counter Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Color")}>
        <Text>Go to Color Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Square")}>
        <Text>Go to Square Demo</Text>
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
