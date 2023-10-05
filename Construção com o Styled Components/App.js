import React from 'react';
import { Button, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'; // Exemplo de ícones do FontAwesome

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TextInput } from './assets/TextInput.js';

function TelaEditar({ navigation }) {
  return <View>
  <Text></Text>
  </View>;
}

function TelaVisualizar({ navigation }) {
  return <View></View>;
}

function TelaInserir({ navigation }) {
  return (
    <div>
      <TextInput placeholder="Nome" />
      <TextInput placeholder="Descrição" />
      <Button title="Adicionar" />
    </div>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Inserir Informação">
        <Drawer.Screen name="Inserir Informação" component={TelaInserir} />
        <Drawer.Screen
          name="Visualizar Informações"
          component={TelaVisualizar}
        />
        <Drawer.Screen name="Editar Informações" component={TelaEditar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
