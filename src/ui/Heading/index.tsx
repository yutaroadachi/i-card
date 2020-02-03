import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  fontsize?: string;
  margin?: string;
};

const StyledHeading1 = styled.h1<Pick<HeadingProps, 'fontsize' | 'margin'>>`
  color: #babecc;
  text-shadow: 1px 1px 1px #fff;
  font-size: ${({ fontsize }) => fontsize};
  margin: ${({ margin }) => margin};
`;

export const Heading1: React.FC<HeadingProps> = ({
  children,
  className,
  fontsize = '2rem',
  margin = '0 0 0 0',
}) => {
  return (
    <StyledHeading1 className={className} fontsize={fontsize} margin={margin}>
      {children}
    </StyledHeading1>
  );
};
