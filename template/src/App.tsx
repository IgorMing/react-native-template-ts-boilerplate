import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTab from './screens/Authenticated/BottomTab';
import DetailsScreen from './screens/Authenticated/Details';
import SigninScreen from './screens/Public/Signin';
import { useAuthStore } from './stores/Auth';
import { RootStackParams } from './types';

const Stack = createNativeStackNavigator<RootStackParams>();

function App(): JSX.Element {
  const { isLoggedIn } = useAuthStore();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <BottomTab />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
