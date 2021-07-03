import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './style';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

// eslint-disable-next-line react/prop-types
const Input: React.FC<InputProps> = ({ /* name, */ icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} color="#666360" />
    <TextInput placeholderTextColor="#666360" {...rest} />
  </Container>
);

export default Input;
