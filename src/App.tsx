import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Navigator from './root-navigator';
import store from './store';
import theme from './commons/styled-components/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={theme.statusBar?.content}
          backgroundColor={theme.statusBar?.background}
        />
        <Navigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
