import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ColorCounter from "../../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + 20)}
        onDecrease={() => setRed(red - 20)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + 20)}
        onDecrease={() => setGreen(green - 20)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + 20)}
        onDecrease={() => setBlue(blue - 20)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
