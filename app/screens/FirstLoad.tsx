import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../assets/moduleSVG/logoSVG'
import { Dimensions } from "react-native";
import React from "react";
import BienvenueSVG from "../assets/moduleSVG/bienvenueSVG";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {User} from "../models/User";
import {Pet} from "../models/Pet";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


async function isConnected(navigation) {
  const isConnected = await AsyncStorage.getItem('token');
  if(isConnected !== null) {
    axios.defaults.headers.common['Authorization'] = isConnected
    const userId = (await axios.get('/tokens')).data
    const user: User = (await axios.get('/users/' + userId)).data
    if(user.isIndividual) {
      const pets: Pet[] = (await axios.get('/pets/byUserId/' + userId)).data
      if(pets.length === 0)
        navigation.navigate('AddAnimal', {title: "Ajouter votre animal", word:"Ajouter", word2:"ajouté", redirection:'AddAnimal'})
      else
          navigation.navigate('Home')
    } else if(user.isCompany) {
      console.log(user)
      if(user.keepCats === null)
        navigation.navigate('ModeGarde')
      else
        navigation.navigate('Home')
    }

  } else {
    navigation.navigate('ChoixConexionInscription')
  }
}


export default function FirstLoad({navigation}) {
  return (
        <SafeAreaView style={styles.container}>
          <Text style={{fontSize: 30, fontWeight: '700'}}>Bienvenue sur </Text>
          <Text style={{fontSize: 40, fontWeight: '800'}}>PetWatcher</Text>
          <BienvenueSVG></BienvenueSVG>
          <TouchableOpacity activeOpacity={0.8} style={styles.commencer} onPress={() => isConnected(navigation)}>
            <Text style={styles.submit}>Commencer</Text>
          </TouchableOpacity>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width : width,
    height: height,
  },
  commencer: {
    minHeight: 50,
    backgroundColor: '#CEEAF0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 30,
    width: '90%',
  },
  submit: {}
});
