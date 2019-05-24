import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes';

/**
 * Remove this line below after this issue be solved, and an update
 * be released from reactotron library
 * issue link: https://github.com/infinitered/reactotron/issues/996
 */
YellowBox.ignoreWarnings([
  'Warning: Async Storage has been extracted from react-native core'
]);

if (__DEV__) {
  import('../ReactotronConfig').then(() =>
    console.log('Reactotron Configured')
  );
}

export default () => <Routes />;
