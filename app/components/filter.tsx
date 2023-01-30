import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, Pressable } from 'react-native';
import { Dimensions } from "react-native";

import IconFilter from '../assets/moduleSVG/filterSVG'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*Ici passage de parametre par rapport a la page checkReservation car selon l'animal le background change de couleur et egalement l'icon !!!!! */

export default class CardDemandeReservation extends Component {

    render() {
        return (
            <SafeAreaView>
                <TouchableOpacity activeOpacity={.7} style={styles.content}>
                    <IconFilter></IconFilter>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        width: 56,
        height: 56,
        borderRadius: 500,
        backgroundColor: '#CEEAF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSubmit: {
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 20,
        width: '40%',
        backgroundColor: '#CEEAF0',
    },
    submit: {
        fontSize: 16,
    },
});