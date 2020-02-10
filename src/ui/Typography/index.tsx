import React from 'react';
import styled from 'styled-components';

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  fontsize?: string;
  margin?: string;
};

const StyledHeading1 = styled.h1<Pick<TypographyProps, 'fontsize' | 'margin'>>`
  color: #babecc;
  text-shadow: 1px 1px 1px #fff;
  font-size: ${({ fontsize }) => fontsize};
  margin: ${({ margin }) => margin};
`;

export const Heading1: React.FC<TypographyProps> = ({
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

const StyledHeading2 = StyledHeading1.withComponent('h2');

export const Heading2: React.FC<TypographyProps> = ({
  children,
  className,
  fontsize = '1.8rem',
  margin = '0 0 0 0',
}) => {
  return (
    <StyledHeading2 className={className} fontsize={fontsize} margin={margin}>
      {children}
    </StyledHeading2>
  );
};

const StyledHeading3 = StyledHeading1.withComponent('h3');

export const Heading3: React.FC<TypographyProps> = ({
  children,
  className,
  fontsize = '1.6rem',
  margin = '0 0 0 0',
}) => {
  return (
    <StyledHeading3 className={className} fontsize={fontsize} margin={margin}>
      {children}
    </StyledHeading3>
  );
};
