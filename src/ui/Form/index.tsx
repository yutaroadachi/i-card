import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

type FormProps = {
  className?: string;
  placeholder: string;
  width?: string;
  borderRadius?: string;
  margin?: string;
  value?: string;
  onChange?: (e: any) => void;
};

const StyledInputText = styled.input<
  Pick<FormProps, 'width' | 'borderRadius' | 'margin'>
>`
  appearance: none;
  border: 0;
  outline: 0;
  box-shadow: inset 2px 2px 5px ${theme.main.darker},
    inset -5px -5px 10px ${theme.main.brighter};
  color: ${theme.main.accent};
  font-size: 1rem;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};

  ::placeholder {
    text-shadow: 1px 1px 0 ${theme.main.brighter};
  }

  &:focus {
    box-shadow: inset 1px 1px 2px ${theme.main.darker},
      inset -1px -1px 2px ${theme.main.brighter};
  }
`;

export const InputText: React.FC<FormProps> = ({
  className,
  placeholder,
  width,
  borderRadius,
  margin = '0 0 0 0',
  value,
  onChange,
}) => {
  return (
    <StyledInputText
      type="text"
      className={className}
      placeholder={placeholder}
      width={width}
      borderRadius={borderRadius}
      margin={margin}
      value={value}
      onChange={onChange}
    />
  );
};
