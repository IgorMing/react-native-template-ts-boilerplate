import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '~/root-navigator';

import Signin from './Signin';
import Signup from './Signup';

const Stack = createStackNavigator<RootStackParamList>();

interface NotAuthenticatedStackNavigatorProps {
  isSigningOut: boolean;
}

const NotAuthenticatedStackNavigator: React.FC<NotAuthenticatedStackNavigatorProps> = ({
  isSigningOut
}) => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          animationTypeForReplace: isSigningOut ? 'pop' : 'push'
        }}
      />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default NotAuthenticatedStackNavigator;
