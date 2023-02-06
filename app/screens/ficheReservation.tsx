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
import IconParameter from '../assets/moduleSVG/parametresSVG'
import { User } from '../models/User';
import axios from 'axios';
import ModalParameter from '../components/modalParameter';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function FicheReservation({ navigation, route }) {

    const [reservation, setReservation] = React.useState(false);
    const [dates, setDates] = React.useState([]);
    const [parameter, setParameter] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState('');

    const pull_dates = (dates) => {
        console.log(dates);
        setDates(dates);
    }

    console.log(route.params.id)

    async function initUser() {
        const user: User = (await axios.get('/users/' + route.params.id)).data
        setUser(user)
    }

    if(user === null)
        initUser()

    function confirm() {
        console.log(dates)
        if(dates.length > 2) {
            navigation.navigate('ChoixAnimauxResa', {
                id: route.params.id,
                dates: dates
            })
        }
        
        else
            setErrorMessage('Veuillez selectionner la période de la réservation')
    }

    return (
        <ScrollView>
            
            {user !== null && <>
                <SafeAreaView style={styles.container}>
                <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => setParameter(true)} onPressOut={() => setParameter(false)}>
                    <IconParameter></IconParameter>
                </TouchableOpacity>
                
                    <View style={[styles.wrapper, styles.bloc]}>
                        <View style={styles.header}>
                            <View style={styles.blocAvis}>
                                <Text style={styles.textAvis}>8 avis</Text>
                            </View>

                            <Image style={[styles.img, { left: Dimensions.get('window').width / 2 - 72 }]} source={require('../assets/photo-profil.png')} />

                            <View style={styles.blocIcon}>
                                {user.keepDogs && <IconChien></IconChien>}
                                {user.keepCats && <IconChat></IconChat>}
                            </View>
                        </View>

                        <View style={styles.identity}>
                            <Text style={styles.text}>{(user.firstname + user.lastname) || user.companyName}</Text>
                            <IconPro></IconPro>
                            <Text style={styles.text}>Professionnel</Text>
                        </View>

                        <View style={styles.address}>
                            <IconMarker></IconMarker>
                            <Text style={[styles.text, styles.city]}>{user.city}, {user.postalCode}</Text>
                        </View>

                        <View style={styles.stars}>
                            <IconStarFilled></IconStarFilled>
                            <IconStarFilled></IconStarFilled>
                            <IconStarFilled></IconStarFilled>
                            <IconStarFilled></IconStarFilled>
                            <IconStarFilled></IconStarFilled>
                        </View>

                        <View style={styles.pricing}>
                            <Text style={styles.critere}>Tarifs : </Text>
                            <Text style={styles.text}>{user.price}€/jour</Text>
                        </View>

                        <ScrollView>
                        <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit} onPress={() => setReservation(!reservation)}>
                            <Text style={styles.submit}>Sélectionner mes dates </Text>
                        </TouchableOpacity>

                        { dates[1] != null && 
                            <View style={styles.blocDate}>
                                {dates[1] != null &&
                                    <Text> Du {dates[1]}</Text>
                                }
                                {dates[2] != null &&
                                    <Text> au {dates[2]}</Text>
                                }
                            </View>
                        }

                        {
                            reservation == true &&
                            <View style={styles.blocCalendar}>
                                <Calendar func={pull_dates}></Calendar>
                            </View>
                        }

                        <TouchableOpacity activeOpacity={0.8} style={[styles.containerSubmit, styles.bgRed]} onPress={() => confirm()}>
                            <Text style={styles.submit}>Selectionner mes animaux</Text>
                        </TouchableOpacity>
                        <Text style={styles.error}>{errorMessage}</Text>
                        </ScrollView>
                        {parameter == true &&
                    <ModalParameter navigation={navigation} onVisibleChange={(change) => {
                        setParameter(change);
                    } }></ModalParameter>}
                    </View>
                </SafeAreaView>
            </>}
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
        marginTop: 90,
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
    blocDate: {
        marginTop: 20,
        flexDirection: 'row',
    },
    blocCalendar: {
        marginTop: 20,
    },
    containerSubmit: {
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 20,
        width: width * 0.8,
        backgroundColor: '#CEEAF0',
    },
    bgRed: {
        backgroundColor: '#FAD4D4',
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
    error: {
        textAlign: "center",
        marginTop: 10,
        color: 'red',
        fontSize: 16
    }
});