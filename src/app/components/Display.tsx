import React from 'react';
import styled from 'styled-components';
import Card from 'ui/Card';
import { Heading2, Heading3 } from 'ui/Typography';

const DisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardTitle = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  width: 365px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Display = () => {
  return (
    <DisplayWrapper>
      <Card width="750px" height="250px" borderRadius="30px" margin="0 0 3rem">
        <CardTitle>
          <Heading2>iCard</Heading2>
        </CardTitle>
        <CardContent>
          <Heading3>Technology field</Heading3>
          <p style={{ margin: '0 0 10px', wordWrap: 'break-word' }}>
            Frontend/Backend engineer
          </p>
          <Heading3>Technology stack</Heading3>
          <p style={{ margin: '0 0 30px', wordWrap: 'break-word' }}>
            React
            <br />
            Ruby on Rails
          </p>
        </CardContent>
      </Card>
    </DisplayWrapper>
  );
};

export default Display;
