import React from 'react';
import styled from 'styled-components/native';
import CustomTextInput from '../assets/CustomTextInput';
import MyCustomButton from '../assets/MyCustomButton' // Importe o componente CustomTextInput

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <CustomTextInput placeholder="Digite algo" />
      <MyCustomButton
        title="Ir para a segunda tela"
        onPress={() => navigation.navigate('Second')}
       />
    </Container>
  );
};

export default HomeScreen;
