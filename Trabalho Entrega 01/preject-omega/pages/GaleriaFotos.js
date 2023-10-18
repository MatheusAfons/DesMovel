import React from 'react';
import { View, Image, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';

const imagens = [
  { id: 1, source: require('./paisagem-natural.jpg') },
  { id: 2, source: require('./paisagem-natural1.jpg') },
  // Adicione mais imagens conforme necessário
];

const GaleriaFotos = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Comentarios')}
      style={styles.imageContainer}
    >
      <Image
        source={item.source}
        style={styles.image}
      />
      <Text>Comentar</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={imagens}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default GaleriaFotos;
