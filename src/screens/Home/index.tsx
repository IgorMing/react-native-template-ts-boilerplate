import React from 'react';

import Wrapper from './style';

export default () => {
  return (
    <Wrapper.Container>
      <Wrapper.Text.Title>
        Welcome to React Native boilerplate!
      </Wrapper.Text.Title>
      <Wrapper.Text.Description>
        This is to ensure the unit test is passing!
      </Wrapper.Text.Description>
    </Wrapper.Container>
  );
};
