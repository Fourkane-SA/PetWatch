import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../assets/moduleSVG/logoSVG'
import { Dimensions } from "react-native";
import React from "react";
import BienvenueSVG from "../assets/moduleSVG/bienvenueSVG";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//
// TODO : Verification connexion puis si oui redirection home sinon redirection page connexion
//
export default function FirstLoad({navigation}) {
  const [click, setClick] = React.useState(false)

  return (
      <>
        {!click &&
            <SafeAreaView style={styles.container} onTouchStart={() => setClick(true)}>
              <Logo></Logo>
            </SafeAreaView>}
        {click &&
        <SafeAreaView style={styles.containerClicked}>
          <Text style={{fontSize: 30, fontWeight: '700'}}>Bienvenue sur </Text>
          <Text style={{fontSize: 40, fontWeight: '800'}}>PetWatcher</Text>
          <BienvenueSVG></BienvenueSVG>
          <TouchableOpacity activeOpacity={0.8} style={styles.commencer} onPress={() => navigation.navigate('ChoixConexionInscription')}>
            <Text style={styles.submit}>Commencer</Text>
          </TouchableOpacity>
        </SafeAreaView>}
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAD4D4',
    width : width,
    height: height,
  },
  containerClicked: {
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
