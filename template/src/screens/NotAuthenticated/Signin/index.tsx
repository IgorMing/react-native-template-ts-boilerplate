import React from 'react';
import { Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { signin } from '~/modules/auth/duck';
import { Container } from './styles';

const Signin: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Text>Sign in Screen</Text>
      <Button
        onPress={() => {
          dispatch(signin());
        }}
        title="Sign in"
      />
    </Container>
  );
};

export default Signin;
