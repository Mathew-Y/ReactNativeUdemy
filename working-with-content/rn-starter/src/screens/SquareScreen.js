import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ColorCounter from "../../components/ColorCounter";

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      if (state.red + action.amount > 255 || state.red + action.amount < 0)
        return state;
      return { ...state, red: state.red + action.amount };
    case "green":
      if (state.green + action.amount > 255 || state.green + action.amount < 0)
        return state;
      return { ...state, green: state.green + action.amount };
    case "blue":
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0)
        return state;
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  // const setColor = (color, change) => {
  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case "green":
  //       (green + change > 255) | (green + change < 0)
  //         ? null
  //         : setGreen(green + change);
  //       return;
  //     case "blue":
  //       (blue + change > 255) | (blue + change < 0)
  //         ? null
  //         : setBlue(blue + change);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: "red", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "red", amount: -15 })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: "green", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "green", amount: -15 })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: "blue", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "blue", amount: -15 })}
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
