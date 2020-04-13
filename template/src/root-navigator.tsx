import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthTabNavigator from './screens/Authenticated/bottom-tab-navigator';

import { useTypedSelector } from './reducers';
import { useDispatch } from 'react-redux';
import { checkAuth } from './modules/auth/duck';
import NotAuthenticatedStackNavigator from './screens/NotAuthenticated/stack-navigator';
import { Spinner } from './components';

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string | null };
  Profile: undefined;
  Signin: undefined;
  Signup: undefined;
};

const Navigator: React.FC = () => {
  const dispatch = useDispatch();
  const { isSignedin, isSigningOut } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isSignedin === null) {
    return <Spinner />;
  }

  return (
    <NavigationContainer>
      {isSignedin ? (
        <AuthTabNavigator />
      ) : (
        <NotAuthenticatedStackNavigator isSigningOut={isSigningOut} />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
