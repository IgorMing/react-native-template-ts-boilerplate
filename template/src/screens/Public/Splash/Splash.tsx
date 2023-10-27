import Center from '@src/components/Center';
import React from 'react';
import { ActivityIndicator, Text } from 'react-native';

const SplashScreen: React.FC = () => {
  return (
    <Center>
      <Text>Put an icon here</Text>
      <ActivityIndicator size="large" />
    </Center>
  );
};

export default SplashScreen;
