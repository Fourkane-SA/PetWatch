import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { Dimensions } from "react-native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'
import IconMale from '../assets/moduleSVG/maleSVG'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*Ici passage de parametre par rapport a la page checkReservation car selon l'animal le background change de couleur et egalement l'icon !!!!! */

export default class CardAjoutAnimaux extends Component {

    render() {
        return (
            <View style={[styles.wrapper, styles.bloc]}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Boulette de viande</Text>

                        <View style={styles.blocIcon}>
                            <IconMale></IconMale>
                            <IconChien></IconChien>
                        </View>
                    </View>

                    <View style={styles.infos}>
                        <Image style={styles.image} source={require('../assets/photoChien.png')}></Image>
                    </View>

                <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit}>
                    <Text style={styles.submit}>Ajouter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: width * 0.9,
        alignItems: 'center',
    },
    bloc: {
        backgroundColor: '#FFF6E3',
        borderRadius: 5,
        padding: 18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    blocIcon: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infos: {
        width: '100%',
    },
    image: {
        minHeight: 150,
        height: 'auto',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    containerSubmit: {
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '100%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    submit: {
        fontSize: 16,
    }
});