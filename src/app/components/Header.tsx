import React from 'react';
import styled from 'styled-components';
import { Heading1 } from 'ui/Heading';

const HeaderWrapper = styled.div`
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading1>iCard</Heading1>
    </HeaderWrapper>
  );
};

export default Header;
