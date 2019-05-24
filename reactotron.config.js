import Reactotron from "reactotron-react-native";
import { name } from "./app.json";

Reactotron.configure({
  name
})
  .useReactNative()
  .connect();
