import Button from '@src/components/Button';
import Center from '@src/components/Center';
import { useAuthStore } from '@src/stores/Auth';
import React from 'react';
import { Text } from 'react-native';

const ProfileScreen = () => {
  const { toggleAuth } = useAuthStore();
  return (
    <Center>
      <Text>This is the profile screen</Text>
      <Button onPress={toggleAuth}>Sign out</Button>
    </Center>
  );
};

export default ProfileScreen;
