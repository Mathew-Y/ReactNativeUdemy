import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import Practice from "./practice";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>This is the components screen</Text>
      {/* <Text>{greeting}</Text>
      {textElement} */}

<<<<<<< HEAD
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
=======
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" 
      />

      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
>>>>>>> d0d72ff9c96655160d027a51e15ce56e56761513
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
