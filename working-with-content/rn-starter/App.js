import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Practice from "./src/screens/practice";
import ListScreen from "./src/screens/ListScreen";
import Section3Exercise from "./src/screens/Section3Exercise";
<<<<<<< HEAD
import ImageScreen from "./src/screens/ImageScreen";
=======
>>>>>>> d0d72ff9c96655160d027a51e15ce56e56761513

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: Practice,
    List: ListScreen,
<<<<<<< HEAD
    Exercise: Section3Exercise,
    Image: ImageScreen
=======
    Exercise: Section3Exercise
>>>>>>> d0d72ff9c96655160d027a51e15ce56e56761513
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
