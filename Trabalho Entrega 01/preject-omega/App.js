import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import GaleriaFotos from './pages/GaleriaFotos';
import Comentarios from './pages/Comentarios';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GaleriaFotos" component={GaleriaFotos} />
        <Stack.Screen name="Comentarios" component={Comentarios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
