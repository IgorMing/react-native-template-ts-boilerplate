import Button from '@src/components/Button';
import Center from '@src/components/Center';
import SafeArea from '@src/components/SafeArea';
import { useAuthStore } from '@src/stores/Auth';
import React from 'react';

const SigninScreen: React.FC = () => {
  const { toggleAuth } = useAuthStore();
  return (
    <SafeArea>
      <Center>
        <Button onPress={toggleAuth}>Signin</Button>
      </Center>
    </SafeArea>
  );
};

export default SigninScreen;
