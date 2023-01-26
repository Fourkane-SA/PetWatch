import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Dimensions } from "react-native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*Ici passage de parametre par rapport a la page checkReservation car selon l'animal le background change de couleur et egalement l'icon !!!!! */

export default class CardReservation extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.wrapper, styles.bloc]}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Pension pour chien</Text>
                        <IconChien></IconChien>
                    </View>

                    <View style={styles.infos}>
                        <Text style={styles.nom}>Boulette de viande</Text>
                        <Text style={styles.text}>Date de réservation :</Text>
                        <Text style={styles.date}>11/01/2023 - 16/01/2023</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit}>
                        <Text style={styles.submit}>Voir la fiche</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        marginTop: 25,
    },
    wrapper: {
        width: '90%',
        alignItems: 'center',
    },
    bloc: {
        backgroundColor: '#FFF6E3',
        borderRadius: 5,
        height: 250,
        padding: 18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    infos: {

    },
    nom: {
        backgroundColor: '#CEEAF0',
        fontWeight: '700',
        textAlign: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 5,
    },
    text: {
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 15,
    },
    date: {

    },
    containerSubmit: {
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 20,
        width: '40%',
        borderWidth: 2,
        borderColor: '#000',
    },
    submit: {
        fontSize: 16,
    },
});