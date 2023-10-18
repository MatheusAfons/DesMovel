import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    // Simulação de lógica de autenticação
    if (email === 'usuario@example.com' && senha === 'senha123') {
      navigation.navigate('GaleriaFotos');
    } else {
      setErro('Email ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Entrar" onPress={handleLogin} color="#007bff" />
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#007bff',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  erro: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;
