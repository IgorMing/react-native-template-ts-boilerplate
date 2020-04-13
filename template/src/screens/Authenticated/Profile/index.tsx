import React from 'react';
import { Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { signout } from '~/modules/auth/duck';
import { Container } from './styles';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Text>Profile Screen</Text>
      <Button
        onPress={() => {
          dispatch(signout());
        }}
        title="Sign off"
      />
    </Container>
  );
};

export default Profile;
