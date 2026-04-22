import React from 'react';
import { StyledInput, StyledTextArea } from './Input.styles';
import { InputProps, TextAreaProps } from './Input.types';

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return <StyledTextArea {...props} />;
};