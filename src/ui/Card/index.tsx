import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
};

const StyledCard = styled.div<
  Pick<CardProps, 'width' | 'height' | 'borderRadius' | 'margin'>
>`
  position: relative;
  background-color: ${theme.main.base};
  box-shadow: -5px -5px 20px ${theme.main.brighter},
    5px 5px 20px ${theme.main.darker};
  padding: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
`;

const Card: React.FC<CardProps> = ({
  children,
  className,
  width,
  height,
  borderRadius,
  margin = '0 0 0 0',
}) => {
  return (
    <StyledCard
      className={className}
      width={width}
      height={height}
      borderRadius={borderRadius}
      margin={margin}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
