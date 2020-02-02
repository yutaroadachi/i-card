import React from 'react';
import styled from 'styled-components';

type Heading1Props = {
  fontsize?: string;
  margin?: string;
  children: React.ReactNode;
};

const StyledHeading1 = styled.h1<Pick<Heading1Props, 'fontsize' | 'margin'>>`
  color: #babecc;
  text-shadow: 1px 1px 1px #fff;
  font-size: ${({ fontsize }) => fontsize};
  margin: ${({ margin }) => margin};
`;

export const Heading1: React.FC<Heading1Props> = ({
  fontsize = '2rem',
  margin = '0 0 0 0',
  children,
}) => {
  return (
    <StyledHeading1 fontsize={fontsize} margin={margin}>
      {children}
    </StyledHeading1>
  );
};
