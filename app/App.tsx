import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddAnimal from './screens/addAnimal';
//import AddAnimal from './screens/addAnimal';
//import FirstLoad from './screens/firstLoad';
import choixcConexionInscription from './screens/choixConnexionInscription'
import CreationCompteParticulier from './screens/creationCompteParticulier'

export default function App() {

  return (
    <View style={styles.container}>
      <CreationCompteParticulier></CreationCompteParticulier>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
