import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Dimensions } from "react-native";
import CardReservation from '../components/cardReservation'
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

/*Ici requete sur les reservations associé à un un pro/petsitter et passage de parametre pour cardReservation sur le type d'animal, 
CardReservation doit etre dans une boucle pour afficher toutes les resas*/

export default class CheckReservation extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>

                    <CardReservation></CardReservation>

                    <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit}>
                        <Text style={styles.submit}>Ajouter une réservation</Text>
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
        width: width
    },
    wrapper: {
        width: '90%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        marginTop: 65,
        marginBottom: 45,
        textAlign: 'center',
    },
    containerSubmit: {
        minHeight: 50,
        backgroundColor: '#CEEAF0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 30,
        width: '100%',
    },
    submit: {
        fontSize: 16,
    },
});