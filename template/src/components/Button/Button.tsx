import React, { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { InnerText, StyledButton } from './styled';

const Button = ({
  children,
  ...props
}: PropsWithChildren & TouchableOpacityProps) => {
  return (
    <StyledButton {...props}>
      <InnerText>{children}</InnerText>
    </StyledButton>
  );
};

export default Button;
