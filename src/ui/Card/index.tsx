import React from 'react';
import styled from 'styled-components';

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
  background-color: #ebecf0;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3),
    -3px -3px 6px rgba(255, 255, 255, 0.3),
    inset 2px 2px 5px rgba(255, 255, 255, 0.3),
    inset -2px -2px 5px rgba(0, 0, 0, 0.3);
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
