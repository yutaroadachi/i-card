import React from 'react';
import styled from 'styled-components';

type MaterialIconsProps = {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  margin?: string;
};

const StyledMaterialIcons = styled.i<
  Pick<MaterialIconsProps, 'color' | 'fontSize' | 'lineHeight' | 'margin'>
>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: ${({ margin }) => margin};
`;

const MaterialIcons: React.FC<MaterialIconsProps> = ({
  children,
  color,
  fontSize,
  lineHeight,
  margin = '0 0 0 0',
}) => {
  return (
    <StyledMaterialIcons
      className="material-icons"
      color={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
      margin={margin}
    >
      {children}
    </StyledMaterialIcons>
  );
};

export default MaterialIcons;
