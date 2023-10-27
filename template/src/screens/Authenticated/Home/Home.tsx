import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Center, SafeArea } from '@src/components/all';
import { RootStackParams } from '@src/types';
import React from 'react';
import { StatusBar, Text } from 'react-native';

type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;

export default function HomeScreen({}: HomeScreenProps) {
  return (
    <SafeArea>
      <StatusBar barStyle={'dark-content'} />

      <Center>
        <Text>This is the home screen</Text>
      </Center>
    </SafeArea>
  );
}
