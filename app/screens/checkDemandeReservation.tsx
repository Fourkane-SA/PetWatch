import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import CardDemandeReservation from '../components/cardDemandeReservation'
import IconParameter from "../assets/moduleSVG/parametresSVG";
import ModalParameter from "../components/modalParameter";
import axios from 'axios';
import { Reservation } from '../models/Reservation';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

/*Ici requete sur les reservations associé à un un pro/petsitter et passage de parametre pour cardReservation sur le type d'animal,
CardReservation doit etre dans une boucle pour afficher toutes les resas*/

export default function CheckDemandeReservation({ navigation }) {
    const [parameter, setParameter] = React.useState(false);
    const [reservations, setReservations] = React.useState([]);
    async function initReservations() {
        const userId = (await axios.get('/tokens')).data
        const res: Reservation[] = (await axios.get('/reservations/byUserId/petSitterPro/' + userId)).data
        await new Promise(r => setTimeout(r, 2000));
        setReservations(res)
    }


        initReservations()
    
        return (
            <ScrollView>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => setParameter(true)} onPressOut={() => setParameter(false)}>
                    <IconParameter></IconParameter>
                </TouchableOpacity>
                <View style={styles.wrapper}>
                    <FlatList
                        data={reservations}
                        renderItem={({item}) => <CardDemandeReservation id={item.id} navigation={navigation}></CardDemandeReservation>}
                    ></FlatList>

                    {/* <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit}>
                        <Text style={styles.submit}>Ajouter une réservation</Text>
                    </TouchableOpacity> */}

                </View>
                {parameter == true &&
                    <ModalParameter navigation={navigation}  onVisibleChange={(change) => {
                        setParameter(change)
                    }}></ModalParameter>
                }
            </SafeAreaView>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
    },
    wrapper: {
        width: '90%',
        alignItems: 'center',
        marginTop: 60,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 65,
        minHeight: 70,
        alignItems: 'center',
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
