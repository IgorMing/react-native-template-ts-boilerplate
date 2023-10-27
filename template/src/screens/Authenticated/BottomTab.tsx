import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParams } from '@src/types';
import React from 'react';
import HomeStack from './Home/Stack';
import ProfileScreen from './Profile';

const Tab = createBottomTabNavigator<RootTabParams>();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
