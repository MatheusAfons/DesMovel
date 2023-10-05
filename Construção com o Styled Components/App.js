import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Exemplo de ícones do FontAwesome

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TextInput from './assets/TextInput';



function Screen3({ navigation }) {
  return (
    <div>
      tela3
    </div>
  );
}

function Screen2({ navigation }) {
  return (
    <div>
      tela2
    </div>
  );
}

function LoginScreen ({ navigation }) {
  return (
    <div>
          <TextInput
      startIcon={<FontAwesomeIcon icon={faUser} />}
        placeholder="Nome de Usuário"
      />
      <TextInput
      startIcon={<FontAwesomeIcon icon={faLock} />}
        endIcon={<FontAwesomeIcon icon={faEyeSlash} />}
        type="password"
        placeholder="Senha"
      />
    </div>
    
  );
}

const Drawer = createDrawerNavigator()

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Screen2" component={Screen2} />
        <Drawer.Screen name="Screen3" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
