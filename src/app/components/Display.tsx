import React, { useContext } from 'react';
import styled from 'styled-components';
import { Store } from 'store';
import Card from 'ui/Card';
import { Heading2, Heading3, Paragraph } from 'ui/Typography';

const DisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 3rem;
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
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Display = () => {
  const { state } = useContext(Store);

  return (
    <DisplayWrapper>
      <Card width="750px" height="250px">
        <CardTitle>
          <Heading2>iCard</Heading2>
        </CardTitle>
        <CardContent>
          <Heading3>Technology field</Heading3>
          <Paragraph margin="0 0 10px">
            {state.profile.technologyField}
          </Paragraph>
          <Heading3>Technology stack</Heading3>
          <Paragraph margin="0 0 30px">
            {state.profile.technologyStack}
          </Paragraph>
        </CardContent>
      </Card>
    </DisplayWrapper>
  );
};

export default Display;
