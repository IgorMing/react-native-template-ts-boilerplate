import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

describe('App test', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
});
