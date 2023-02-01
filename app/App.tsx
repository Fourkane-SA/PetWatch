import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Upload from "./components/Upload";
import axios from "axios";
import TestUploadScreen from "./screens/testUploadScreen";
// import AddAnimal from './screens/addAnimal';
// import FirstLoad from './screens/firstLoad';
import ChoixcConexionInscription from './screens/choixConnexionInscription'
// import CreationCompteParticulier from './screens/creationCompteParticulier'
import ChoixRole from './screens/choixRole'
import CreationCompteParticulier from "./screens/creationCompteParticulier";
import AddAnimal from "./screens/addAnimal";
import Home from "./screens/home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreationComptePro from "./screens/creationComptePro";
// import CreationComptepro from './screens/creationComptePro'
// import ModeGarde from './screens/modeGarde'
// import Home from './screens/Home'
// import CheckDemandeReservation from './screens/checkReservation'
// import FicheDemandeReservation from './components/ficheDemandeReservation'
// import ResultatRecherche from './screens/resultatRecherche'
// import CardResultatRecherche from './components/cardResultatRech'
// import ModifProfilParticulier from './screens/modifProfilParticulier'
import ModifProfilPro from './screens/modifProfilPro';
import ModifProfilParticulier from "./screens/modifProfilParticulier";

/*const getToken = async () => {
    await AsyncStorage.getItem('token')
}*/

axios.defaults.baseURL = "https://petwatcher.fourkane.me/api"
//axios.defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiYWl0IjoxNjc0NjUzNDI3LCJleHAiOjE2NzczMzE4Mjd9.PN9VDxYzFHwDqcuwfbzViDx-kSI4Nzh70P56_nZc9CQ'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="ChoixConexionInscription" >
            <Stack.Screen options={{headerShown: false}} name="ChoixConexionInscription" component={ChoixcConexionInscription}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: ''}} name="ChoixRole" component={ChoixRole}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: ''}} name="CreationCompteParticulier" component={CreationCompteParticulier}></Stack.Screen>
              <Stack.Screen options={{headerShown: true, headerTitle: ''}} name="CreationComptePro" component={CreationComptePro}></Stack.Screen>
              <Stack.Screen options={{headerShown: false, headerTitle: ''}} name="AddAnimal" component={AddAnimal}></Stack.Screen>
              <Stack.Screen options={{headerShown: false, headerTitle: ''}} name="Home" component={Home}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: 'Modifier le profil'}} name="ModifProfilParticulier" component={ModifProfilParticulier}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: 'Modifier le profil'}} name="ModifProfilPro" component={ModifProfilPro}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
  );
  // return (
  //   <SafeAreaView>
  //     {/* <FirstLoad></FirstLoad>

  //       <ChoixRole></ChoixRole>
  //       <CreationCompteParticulier></CreationCompteParticulier>
  //       <CreationComptepro></CreationComptepro>
  //       <AddAnimal></AddAnimal>
  //       <ModeGarde></ModeGarde>
  //       <Home></Home>
  //       <CheckDemandeReservation></CheckDemandeReservation>
  //       <FicheDemandeReservation></FicheDemandeReservation>
  //       <ModeGarde></ModeGarde>
  //       <TestUploadScreen></TestUploadScreen>
  //       <CardResultatRecherche></CardResultatRecherche>
  //       <ResultatRecherche></ResultatRecherche>
  //       <ModifProfilParticulier></ModifProfilParticulier>
  //        <ModifProfilPro></ModifProfilPro>
  //       */}
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
