import React from 'react';
import styled from 'styled-components';

const App = () => {
  const HelloWorld = styled.h1`
    color: red;
  `;

  return <HelloWorld>Hello World!</HelloWorld>;
};

export default App;
