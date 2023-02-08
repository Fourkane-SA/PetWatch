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
import { User } from '../models/User';
import axios from 'axios';
import { Reservation } from '../models/Reservation';
import { Pet } from '../models/Pet';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

type Props = {
    id
}

export default class CardMesDemandes extends Component<Props> {

    /*user?: User = null
    date: string[] = []
    status: string = ''*/

    state = {
        user: null,
        date: [],
        status: '',
        petsName: ''
    }

    async componentDidMount() {
        const reservation: Reservation = (await axios.get('/reservations/' + this.props.id)).data
        let names = ''
        for(let i=0; i<reservation.idPets.length; i++) {
            const pet: Pet = (await axios.get('/pets/' + reservation.idPets[i])).data
            names +=  pet.name + ' '
        }
        
        this.setState({
            user: (await axios.get('/users/' + reservation.userIdPro)).data,
            date: [reservation.start, reservation.end],
            status: reservation.status,
            petsName: names
        })
    }    

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.wrapper, styles.bloc]}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.nom}>Pet Sitter</Text>
                        </View>


                        {this.state.user !== null && <Image style={[styles.img, {left: Dimensions.get('window').width /2 - 72}]} source={{uri: this.state.user.profilImage || 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'}} />}

                        <View style={styles.blocIcon}>
                            {this.state.user !== null && this.state.user.keepDogs && <IconChien></IconChien>}
                            {this.state.user !== null && this.state.user.keepCats && <IconChat></IconChat>}
                        </View>
                    </View>

                    <View style={styles.identity}>
                        {this.state.user !== null && <Text style={styles.text}>{ (this.state.user.firstname + this.state.user.lastname) || this.state.user.companyName}</Text>}
                        <IconParticulier></IconParticulier>
                    </View>

                    {this.state.user !== null && <>
                        <View style={styles.address}>
                            <IconMarker></IconMarker>
                            <Text style={[styles.text, styles.city]}>{this.state.user.city}, {this.state.user.postalCode}</Text>
                        </View>

                        <View style={styles.address}>
                            <Text style={[styles.text, styles.city]}>Du {this.state.date[0]} au {this.state.date[1]}</Text>
                        </View>
                        <View style={styles.address}>
                            <Text style={[styles.text, styles.city]}>Pour {this.state.petsName}</Text>
                        </View>

                        <Text style={styles.statusAttente}>
                            {this.state.status}
                        </Text>
                    </>}
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