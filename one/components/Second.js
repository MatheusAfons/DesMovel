import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';
import MyCustomButton from '../assets/MyCustomButton'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SecondScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>Esta é a segunda tela</Text>
      <MyCustomButton
        title="Voltar para a tela inicial"
        onPress={() => navigation.goBack()}
      />
    </Container>
  );
};

export default SecondScreen;
