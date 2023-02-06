import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, ScrollView } from 'react-native';
import { Dimensions } from "react-native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'
import IconPro from '../assets/moduleSVG/iconPro'
import Calendar from '../components/calendarmulti'
import IconParticulier from '../assets/moduleSVG/iconParticulier'
import IconMarker from '../assets/moduleSVG/iconMarker'
import IconStarFilled from '../assets/moduleSVG/starFilled'
import CardAjoutAnimaux from '../components/cardAjoutAnimaux';
import IconParameter from '../assets/moduleSVG/parametresSVG'
import { Pet } from "../models/Pet";
import axios from "axios/index";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function ChoixAnimauxResa({ navigation }) {

    const [reservation, setReservation] = React.useState(false);
    const [dates, setDates] = React.useState([]);
    const [parameter, setParameter] = React.useState(false);
    const [pet, setPet] = React.useState([]);

    const pull_dates = (dates) => {
        console.log(dates);
        setDates(dates);
    }

    const initPets = async () => {
        if (pet.length === 0) {
            const userId = (await axios.get('/tokens')).data
            const pets: Pet[] = (await axios.get('/pets/byUserId/' + userId)).data
            console.log(pets)
            setPet(pets)
        }
    }

    initPets()
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => setParameter(true)} onPressOut={() => setParameter(false)}>
                    <IconParameter></IconParameter>
                </TouchableOpacity>
                <View style={[styles.wrapper, styles.bloc]}>
                    <View style={{ width: width * 0.9, marginTop: 15 }}>
                        <FlatList data={pet} renderItem={({ item }) => <CardAjoutAnimaux label="Voir fiche" navigation={navigation} lien='FicheAnimal' id={item.id}></CardAjoutAnimaux>}></FlatList>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.containerSubmit]} onPress={() => navigation.navigate('AddAnimal', { title: "Ajouter votre animal", word: "Ajouter", word2: "ajouté", redirection: 'AddAnimal' })}>
                        <Text style={styles.submit}>Ajouter un animal</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        minHeight: height,
    },
    wrapper: {
        margin: 'auto',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 20,
        width: '90%',
    },
    bloc: {
        borderRadius: 5,
        padding: 18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
        position: 'relative'
    },
    blocIcon: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-evenly',
    },
    img: {
        width: 72,
        height: 72,
        position: 'absolute',
        marginTop: -50,
        borderRadius: 500,
    },
    blocAvis: {
        backgroundColor: '#000',
        borderRadius: 5,
    },
    textAvis: {
        color: '#FFF',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    identity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%',
        marginBottom: 15,
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '50%',
        marginBottom: 25,
    },
    pricing: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    city: {
        marginLeft: 7,
    },
    critere: {
        fontWeight: '500',
    },
    text: {
        textAlign: 'center',
    },
    containerSubmit: {
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 25,
        width: '100%',
        backgroundColor: '#CEEAF0',
    },
    submit: {
        fontSize: 16,
    },
    abs: {
        position: 'absolute',
        top: 30,
        right: 0,
        width: 50,
        height: 50,
        zIndex: 5,
        backgroundColor: 'transparent'
    },
});
