import React from 'react';
import { Text, View } from 'react-native';

export default () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to React Native boilerplate!</Text>
      <Text>This is to ensure the unit test is passing!</Text>
    </View>
  );
};
