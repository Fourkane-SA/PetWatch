import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page d'accueil</Text>
      <Button title='Inscription' onPress={() => navigation.navigate('Inscription')}></Button>
      <Button title='Connexion' onPress={() => navigation.navigate('Connexion')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})