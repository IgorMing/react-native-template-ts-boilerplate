import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './Home';
import DetailsScreen from '../Details/Details';
import { AuthenticatedStackParams } from '@src/types';

const Stack = createNativeStackNavigator<AuthenticatedStackParams>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
