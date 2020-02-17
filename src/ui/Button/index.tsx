import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  width?: string;
  borderRadius?: string;
  color?: string;
  margin?: string;
  onClick?: () => void;
};

const StyledButton = styled.button<
  Pick<ButtonProps, 'width' | 'borderRadius' | 'color' | 'margin'>
>`
  border: 0;
  outline: 0;
  box-shadow: -5px -5px 20px ${theme.main.brighter},
    5px 5px 20px ${theme.main.darker};
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 1px 1px 0 ${theme.main.brighter};
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};

  &:hover {
    box-shadow: -2px -2px 5px ${theme.main.brighter},
      2px 2px 5px ${theme.main.darker};
  }

  &:active {
    box-shadow: inset 1px 1px 2px ${theme.main.brighter},
      inset -1px -1px 2px ${theme.main.darker};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  width,
  borderRadius,
  color,
  margin = '0 0 0 0',
  onClick,
}) => {
  return (
    <StyledButton
      className={className}
      width={width}
      borderRadius={borderRadius}
      color={color}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
