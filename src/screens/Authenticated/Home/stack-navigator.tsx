import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '~/root-navigator';

import Home from '.';
import Details from './Details';

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
