import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Login from "./screens/Login";
import { ChoiceRole } from "./screens/ChoiceRole";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { FormPro } from "./screens/FormPro";
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
// import Home from './screens/home'
// import CheckDemandeReservation from './screens/checkReservation'

/*const getToken = async () => {
    await AsyncStorage.getItem('token')
}*/

axios.defaults.baseURL = "https://petwatcher.fourkane.me/api"
//axios.defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiYWl0IjoxNjc0NjUzNDI3LCJleHAiOjE2NzczMzE4Mjd9.PN9VDxYzFHwDqcuwfbzViDx-kSI4Nzh70P56_nZc9CQ'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="ChoixcConexionInscription" >
            <Stack.Screen options={{headerShown: false}} name="ChoixcConexionInscription" component={ChoixcConexionInscription}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: ''}} name="ChoixRole" component={ChoixRole}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: ''}} name="CreationCompteParticulier" component={CreationCompteParticulier}></Stack.Screen>
              <Stack.Screen options={{headerShown: true, headerTitle: ''}} name="CreationComptePro" component={CreationComptePro}></Stack.Screen>
              <Stack.Screen options={{headerShown: false, headerTitle: ''}} name="AddAnimal" component={AddAnimal}></Stack.Screen>
              <Stack.Screen options={{headerShown: false, headerTitle: ''}} name="Home" component={Home}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
  );
  return (
    <SafeAreaView>
      {/* <FirstLoad></FirstLoad>

        <ChoixRole></ChoixRole>
        <CreationCompteParticulier></CreationCompteParticulier>
        <CreationComptepro></CreationComptepro>
        <AddAnimal></AddAnimal>
        <ModeGarde></ModeGarde>
        <Home></Home>
        <CheckDemandeReservation></CheckDemandeReservation>
        <FicheDemandeReservation></FicheDemandeReservation>
        <TestUploadScreen></TestUploadScreen>
        */}
      <ChoixcConexionInscription></ChoixcConexionInscription>
    </SafeAreaView>
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
