import React from 'react';

import Wrapper from './style';

const Home = () => {
  return (
    <Wrapper.Container>
      <Wrapper.Text.Title>Welcome to TS boilerplate!</Wrapper.Text.Title>
      <Wrapper.Text.Description>
        This is to ensure the unit test is passing!
      </Wrapper.Text.Description>
    </Wrapper.Container>
  );
};

Home.navigationOptions = {
  header: null
};

export default Home;
