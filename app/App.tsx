import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import AddAnimal from './screens/addAnimal';
// import FirstLoad from './screens/firstLoad';
// import ChoixcConexionInscription from './screens/choixConnexionInscription'
// import CreationCompteParticulier from './screens/creationCompteParticulier'
// import ChoixRole from './screens/choixRole'
// import CreationComptepro from './screens/creationComptePro'
// import ModeGarde from './screens/modeGarde'
// import Home from './screens/home'
import CheckReservation from './screens/checkReservation'

export default function App() {

  return (
    <View style={styles.container}>
    {/* Pages */}

     {/* <FirstLoad></FirstLoad>
          <ChoixcConexionInscription></ChoixcConexionInscription>
          <ChoixRole></ChoixRole>
          <CreationCompteParticulier></CreationCompteParticulier>
          <CreationComptepro></CreationComptepro>
          <AddAnimal></AddAnimal>
          <ModeGarde></ModeGarde>
           <Home></Home>
      */}
    <CheckReservation></CheckReservation>

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
