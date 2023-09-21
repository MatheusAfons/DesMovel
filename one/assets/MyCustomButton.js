import React from 'react';
import styled from 'styled-components/native';

const CustomButton = styled.TouchableOpacity`
  background-color: black;
  padding: 10px 20px;
  border-radius: 10px; 
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const MyCustomButton = ({ title, onPress }) => {
  return (
    <CustomButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </CustomButton>
  );
};

export default MyCustomButton;
