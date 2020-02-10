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
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  width: 345px;
  height: 190px;
`;

const Display = () => {
  return (
    <DisplayWrapper>
      <Card width="750px" height="250px" borderRadius="30px" margin="0 0 3rem">
        <CardTitle>
          <Heading2>iCard</Heading2>
        </CardTitle>
        <CardContent>
          <Heading3>Name</Heading3>
          <p style={{ margin: '0' }}>21文字まで</p>
          <Heading3>Technology field</Heading3>
          <p style={{ margin: '0', wordWrap: 'break-word' }}>42文字まで</p>
          <Heading3>Technology stack</Heading3>
          <p style={{ margin: '0', wordWrap: 'break-word' }}>42文字まで</p>
        </CardContent>
      </Card>
    </DisplayWrapper>
  );
};

export default Display;
