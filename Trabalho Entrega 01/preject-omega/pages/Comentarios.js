import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');

  const adicionarComentario = () => {
    if (novoComentario.trim() !== '') {
      setComentarios([...comentarios, novoComentario]);
      setNovoComentario('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite seu comentário"
          value={novoComentario}
          onChangeText={setNovoComentario}
          style={styles.input}
        />
        <Button title="Comentar" onPress={adicionarComentario} />
      </View>
      <View style={styles.comentariosContainer}>
        <FlatList
          data={comentarios}
          renderItem={({ item }) => (
            <View style={styles.comentarioItem}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  form: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    padding: 8,
  },
  comentariosContainer: {
    flex: 1,
  },
  comentarioItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default Comentarios;
