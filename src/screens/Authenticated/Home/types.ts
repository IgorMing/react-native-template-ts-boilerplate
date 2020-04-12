import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '~/root-navigator';

export interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
