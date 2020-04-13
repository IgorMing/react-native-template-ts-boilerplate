import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '~/root-navigator';

interface DetailsProps {
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
  route: RouteProp<RootStackParamList, 'Details'>;
}

const Details: React.FC<DetailsProps> = ({ route }) => {
  return (
    <SafeAreaView>
      <Text>Details Screen. Id: {route.params.id}</Text>
    </SafeAreaView>
  );
};

export default Details;
