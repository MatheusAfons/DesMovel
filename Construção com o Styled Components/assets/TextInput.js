import React from 'react';
import styled from 'styled-components';

// Estilos do TextInput
const StyledTextInput = styled.div`
  margin: 5%;
  display: flex;
  align-items: center;
  border: 3px solid #000;
  border-radius: 10px;
  padding: 8px;
`;

const Icon = styled.div`
  margin-right: 8px;
  font-size: 20px;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 0;
  margin: 0;
`;

const TextInput = ({ startIcon, endIcon, ...restProps }) => {
  return (
    <StyledTextInput>
      {startIcon && <Icon>{startIcon}</Icon>}
      <InputField {...restProps} />
      {endIcon && <Icon>{endIcon}</Icon>}
    </StyledTextInput>
  );
};

export default TextInput;
