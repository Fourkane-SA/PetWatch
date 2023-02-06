import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { Dimensions } from "react-native";
import {useNavigation} from "@react-navigation/native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'
import IconPro from '../assets/moduleSVG/iconPro'
import IconParticulier from '../assets/moduleSVG/iconParticulier'
import IconMarker from '../assets/moduleSVG/iconMarker'
import IconStarFilled from '../assets/moduleSVG/starFilled'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class CardMesDemandes extends Component {

    render() {
        
        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.wrapper, styles.bloc]}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.nom}>Pet Sitter</Text>
                        </View>


                        <Image style={[styles.img, {left: Dimensions.get('window').width /2 - 72}]} source={require('../assets/photo-profil.png')} />

                        <View style={styles.blocIcon}>
                            <IconChien></IconChien>
                            <IconChat></IconChat>
                        </View>
                    </View>

                    <View style={styles.identity}>
                        <Text style={styles.text}>Benoit</Text>
                        <IconParticulier></IconParticulier>
                    </View>

                    <View style={styles.address}>
                        <IconMarker></IconMarker>
                        <Text style={[styles.text, styles.city]}>Lyon, 69001</Text>
                    </View>

                    <View style={styles.address}>
                        <Text style={[styles.text, styles.city]}>Du 16-01-2023 au 19-01-2023</Text>
                    </View>
                    <View style={styles.address}>
                        <Text style={[styles.text, styles.city]}>Pour Kiki et Coco</Text>
                    </View>

                    <Text style={styles.statusAttente}>
                        En attente
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width
    },
    wrapper: {
        margin: 'auto',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 20,
        width: '90%',
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
        marginBottom: 20,
        position: 'relative'
    },
    img: {
        width: 72,
        height: 72,
        position: 'absolute',
        marginTop: -50,
        borderRadius: 500,
    },
    blocIcon: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-evenly',
    },
    nom: {
        fontWeight:'700',
    },
    identity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width *0.9,
        marginBottom: 15,
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    city: {
        marginLeft: 7,
    },
    text: {
        textAlign: 'center',
        marginRight: 8,
    },
    statusConfirm: {
        marginTop: 20,
        minHeight: 40,
        borderRadius: 50,
        width: '80%',
        backgroundColor: '#D9FFCB',
        textAlign: 'center',
        textAlignVertical:'center',
    },
    statusAttente: {
        marginTop: 20,
        minHeight: 40,
        width: '80%',
        borderRadius: 50,
        backgroundColor: '#CEEAF0',
        textAlign:'center',
        textAlignVertical:'center',
    },
    containerSubmit: {
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 20,
        width: '60%',
        backgroundColor: '#CEEAF0',
    },
    submit: {
        fontSize: 16,
    },
});