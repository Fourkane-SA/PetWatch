import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Upload from "./components/Upload";
import axios from "axios";
import TestUploadScreen from "./screens/testUploadScreen";
// import FirstLoad from './screens/firstLoad';
import ChoixcConexionInscription from './screens/choixConnexionInscription'
// import CreationCompteParticulier from './screens/creationCompteParticulier'
import ChoixRole from './screens/choixRole'
import CreationCompteParticulier from "./screens/creationCompteParticulier";
import AddAnimal from "./screens/addAnimal";
import Home from "./screens/home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreationComptePro from "./screens/creationComptePro";
// import CheckDemandeReservation from './screens/checkReservation'
// import FicheDemandeReservation from './components/ficheDemandeReservation'
import ResultatRecherche from './screens/resultatRecherche'
import ModifProfilPro from './screens/modifProfilPro';
import ModifProfilParticulier from "./screens/modifProfilParticulier";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SearchSVG from "./assets/moduleSVG/searchSVG";
import ModeGarde from "./screens/modeGarde";
import FirstLoad from "./screens/FirstLoad";
import FicheProfilPro from './screens/ficheProfilPro';
import FicheReservation from './screens/ficheReservation'
import FenetreChat from './screens/chat'
import ChoixAnimauxResa from './screens/choixAnimauxResa'
import MesAnimaux from './screens/mesAnimaux'
import FicheAnimal from './screens/ficheAnimal'
import Messagerie from './screens/messagerie'
import MesDemandes from './screens/mesDemandes'
import CalendarSVG from "./assets/moduleSVG/calendarSVG";
import CheckReservation from "./screens/checkDemandeReservation";
import AnimSVG from "./assets/moduleSVG/animSVG";
import MessagerieSVG from "./assets/moduleSVG/messagerieSVG";
import NotifSVG from "./assets/moduleSVG/notifSVG";

/*const getToken = async () => {
    await AsyncStorage.getItem('token')
}*/

axios.defaults.baseURL = "https://petwatcher.fourkane.me/api"
//axios.defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiYWl0IjoxNjc0NjUzNDI3LCJleHAiOjE2NzczMzE4Mjd9.PN9VDxYzFHwDqcuwfbzViDx-kSI4Nzh70P56_nZc9CQ'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackConnected() {
    return (
        <Stack.Navigator initialRouteName='Accueil'>
            <Stack.Screen name="Accueil" options={{headerShown: false, headerTitle: ''}}  component={Home}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: 'Modifier le profil'}} name="ModifProfilParticulier" component={ModifProfilParticulier}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: 'Modifier le profil'}} name="ModifProfilPro" component={ModifProfilPro}></Stack.Screen>
            <Stack.Screen options={{ headerShown: true, headerTitle: 'Pensions et Pet Sitter disponibles' }} name="ResultatsRecherche" component={ResultatRecherche}></Stack.Screen>
            <Stack.Screen options={{ headerShown: true, headerTitle: '' }} name="FicheProfilPro" component={FicheProfilPro}></Stack.Screen>
            <Stack.Screen options={{ headerShown: true, headerTitle: '' }} name="FicheReservation" component={FicheReservation}></Stack.Screen>
            <Stack.Screen options={{ headerShown: true, headerTitle: '' }} name="FenetreChat" component={FenetreChat}></Stack.Screen>
            <Stack.Screen options={{ headerShown: true, headerTitle: 'Choisir animaux' }} name="ChoixAnimauxResa" component={ChoixAnimauxResa}></Stack.Screen>
            <Stack.Screen options={{ headerShown: true, headerTitle: '' }} name="FicheAnimal" component={FicheAnimal}></Stack.Screen>
            <Stack.Screen options={{ headerShown: true, headerTitle: '' }} name="ModeGarde" component={ModeGarde}></Stack.Screen>
        </Stack.Navigator>
    )
}

function Tabs() {
  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                  if (route.name === 'home')
                      return <View style={styles.container}><SearchSVG></SearchSVG></View>
                  else if(route.name === 'MesAnimaux')
                      return <View style={styles.container}><AnimSVG></AnimSVG></View>
                  else if(route.name === 'CheckReservation')
                      return <View style={styles.container}><CalendarSVG></CalendarSVG></View>
                  else if(route.name === 'MesDemandes')
                      return <View style={styles.container}><NotifSVG></NotifSVG></View>
                  else if(route.name === 'Messagerie')
                      return <View style={styles.container}><MessagerieSVG></MessagerieSVG></View>
              },
              tabBarStyle: {
                  backgroundColor: '#FFF6E3'
              }
          })}
      >
        <Tab.Screen name="home" options={{headerShown: false, tabBarLabel: ''}}  component={StackConnected}></Tab.Screen>
          <Tab.Screen options={{ headerShown: true, headerTitle: 'Mes animaux', tabBarLabel: '' }} name="MesAnimaux" component={MesAnimaux}></Tab.Screen>
          <Tab.Screen name="CheckReservation" options={{headerShown: false, tabBarLabel: ''}}  component={CheckReservation}></Tab.Screen>
          <Tab.Screen options={{ headerShown: true, headerTitle: 'Mes demandes', tabBarLabel: '' }} name="MesDemandes" component={MesDemandes}></Tab.Screen>
          <Tab.Screen options={{ headerShown: true, headerTitle: 'Mes messages', tabBarLabel: '' }} name="Messagerie" component={Messagerie}></Tab.Screen>
      </Tab.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="FirstLoad" >
              <Stack.Screen options={{headerShown: false}} name="FirstLoad" component={FirstLoad}></Stack.Screen>
            <Stack.Screen options={{headerShown: false}} name="ChoixConexionInscription" component={ChoixcConexionInscription}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: ''}} name="ChoixRole" component={ChoixRole}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: ''}} name="CreationCompteParticulier" component={CreationCompteParticulier}></Stack.Screen>
            <Stack.Screen options={{headerShown: true, headerTitle: ''}} name="CreationComptePro" component={CreationComptePro}></Stack.Screen>
            <Stack.Screen options={{headerShown: false, headerTitle: ''}} name="AddAnimal" component={AddAnimal}></Stack.Screen>
              <Stack.Screen options={{headerShown: false, headerTitle: ''}} name="ModeGarde" component={ModeGarde}></Stack.Screen>
            <Stack.Screen options={{headerShown: false, headerTitle: ''}} name="Home" component={Tabs}></Stack.Screen>



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
      marginTop: 30
  },
});
