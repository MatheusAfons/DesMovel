// CustomTextInput.js
import React from 'react';
import styled from 'styled-components/native';

const InputContainer = styled.View`
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;
`;

const TextInput = styled.TextInput``;

const CustomTextInput = ({ placeholder }) => {
  return (
    <InputContainer>
      <TextInput placeholder={placeholder} />
    </InputContainer>
  );
};

export default CustomTextInput;
