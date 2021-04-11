// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import Practice from "./src/screens/practice";
import ListScreen from "./src/screens/ListScreen";
import Section3Exercise from "./src/screens/Section3Exercise";
import CounterScreen from "./src/screens/CounterScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";

const MainNavigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{ title: "App" }}
      >
        <MainNavigator.Screen name="Home" component={HomeScreen} />
        <MainNavigator.Screen name="Components" component={Practice} />
        <MainNavigator.Screen name="List" component={ListScreen} />
        <MainNavigator.Screen name="Exercise" component={Section3Exercise} />
        <MainNavigator.Screen name="Image" component={ImageScreen} />
        <MainNavigator.Screen name="Counter" component={CounterScreen} />
        <MainNavigator.Screen name="Color" component={ColorScreen} />
        <MainNavigator.Screen name="Square" component={SquareScreen} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Components: Practice,
//     List: ListScreen,
//     Exercise: Section3Exercise,
//     Image: ImageScreen,
//     Counter: CounterScreen,
//     Color: ColorScreen
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "App"
//     }
//   }
// );

export default App;
