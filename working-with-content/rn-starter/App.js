import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Practice from "./src/screens/practice";
import ListScreen from "./src/screens/ListScreen";
import Section3Exercise from "./src/screens/Section3Exercise";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: Practice,
    List: ListScreen,
    Exercise: Section3Exercise
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
