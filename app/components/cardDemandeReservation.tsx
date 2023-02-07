import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Dimensions } from "react-native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'
import { Reservation } from '../models/Reservation';
import axios from 'axios';
import { Pet } from '../models/Pet';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*Ici passage de parametre par rapport a la page checkReservation car selon l'animal le background change de couleur et egalement l'icon !!!!! */

class Props {
    navigation
    id
}

export default class CardDemandeReservation extends Component<Props> {

    state = {
        cats: false,
        dogs: false,
        reservation: null,
        clientName: null
    }

    async isCats(idPets: string[]) {
        for(let i=0; i< idPets.length; i++) {
            const pet: Pet = (await axios.get('/pets/' + idPets[i])).data
            if(pet.type === 'Chat')
                return true
        }
        return false
    }

    async isDogs(idPets: string[]) {
        for(let i=0; i< idPets.length; i++) {
            const pet: Pet = (await axios.get('/pets/' + idPets[i])).data
            if(pet.type === 'Chien')
                return true
        }
        return false
    }

    async petsName(idPets: string[]) {
        let names = ''
        for(let i=0; i<idPets.length; i++) {
            const pet: Pet = (await axios.get('/pets/' + idPets[i])).data
            names += pet.name + ', '
        }
        this.setState({
            names: names
        })
    }

    async componentDidMount(){
        const res: Reservation = (await axios.get('/reservations/' + this.props.id)).data
        const names = await this.petsName(res.idPets)
        const user = (await axios.get('/users/' + res.userIdClient)).data
        this.setState({
            reservation: res,
            cats: await this.isCats(res.idPets),
            dogs: await this.isDogs(res.idPets),
            clientName: user.firstname + ' ' + user.lastname
        }) 
    }

    render() {
        return (
            <ScrollView>
            <View style={[styles.wrapper, styles.bloc]}>
                {this.state.reservation !== null && <>
                    <View style={styles.header}>
                        <Text style={styles.title}>Pension pour chien</Text>
                        {this.state.cats && <IconChat></IconChat>}
                        {this.state.dogs && <IconChien></IconChien>}
                    </View>

                    <View style={styles.infos}>
                        <Text style={styles.nom}>{this.state.clientName}</Text>
                        <Text style={styles.text}>Date de réservation :</Text>
                        <Text style={styles.date}>{this.state.reservation.start} - {this.state.reservation.end}</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit} onPress= {() => this.props.navigation.navigate('FicheDemandeReservation', {id: this.props.id}) }>
                        <Text style={styles.submit}>Voir la fiche</Text>
                    </TouchableOpacity>
                </>}
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: width*0.9,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
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
        marginBottom: 20
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
