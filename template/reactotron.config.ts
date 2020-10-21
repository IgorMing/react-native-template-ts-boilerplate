import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

import app from './app.json';

declare global {
  interface Console {
    tron: any;
  }
}

console.tron = Reactotron.configure({
  name: app.name
})
  .useReactNative()
  .use(reactotronRedux())
  .connect();

console.log = console.tron.log;

export default console.tron;
