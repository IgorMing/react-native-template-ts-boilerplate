import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "~/screens/Home";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
