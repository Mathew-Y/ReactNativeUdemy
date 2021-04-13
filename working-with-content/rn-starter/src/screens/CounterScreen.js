import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (count, action) => {
  return count + action.amount;

  // return { ...state, counter: state.counter + action.amount };
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ amount: 1 });
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ amount: -1 });
        }}
      />

      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
