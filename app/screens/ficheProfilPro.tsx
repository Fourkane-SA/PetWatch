import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, ScrollView } from 'react-native';
import { Dimensions } from "react-native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'
import IconPro from '../assets/moduleSVG/iconPro'
import IconParticulier from '../assets/moduleSVG/iconParticulier'
import IconMarker from '../assets/moduleSVG/iconMarker'
import IconStarFilled from '../assets/moduleSVG/starFilled'
import IconParameter from '../assets/moduleSVG/parametresSVG'
import { User } from '../models/User';
import axios from 'axios';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function FicheProfilPro({ navigation , route}) {

    const [reservation, setReservation] = React.useState(0);
    const [parameter, setParameter] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const id = route.params.id
    
    async function initUser() {
        const data: User = (await axios.get('/users/' + id)).data
        setUser(data)
    }
    
    if(user === null)
        initUser()

    var poids = [
        {
            gabarit: 'Petit',
            tranche: '0-7 kg',
            bg: '#FFF6E3',
            borderWidth: 1,
        },
        {
            gabarit: 'Moyen',
            tranche: '7-18 kg',
            bg: '#D9FFCB',
            borderWidth: 0,
        },
        {
            gabarit: 'Grand',
            tranche: '18-45 kg',
            bg: '#CEEAF0',
            borderWidth: 0,
        },
    ]

    var gallery = [
        {
            id: 'img1',
            src: require('../assets/galerie1.png')
        },
        {
            id: 'img2',
            src: require('../assets/galerie2.png')
        },
    ]

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
                            <IconChien></IconChien>
                            <IconChat></IconChat>
                        </View>
                    </View>

                    <View style={styles.identity}>
                        <Text style={styles.text}>{ (user.firstname + user.lastname) || user.companyName}</Text>
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

                    <FlatList
                        horizontal={true}
                        data={poids}
                        renderItem={({ item }) => <View style={[{ backgroundColor: item.bg }, { borderWidth: item.borderWidth }, styles.listItem]}><Text>{item.gabarit} :  {item.tranche}</Text></View>}
                        keyExtractor={item => item.gabarit}
                    />

                    <View style={styles.description}>
                        <Text > {user.description} </Text>
                    </View>

                    <View style={styles.blocGallery}>
                        <FlatList
                            horizontal={true}
                            data={JSON.parse(user.imageLocation)}
                            renderItem={({ item }) => <Image style={styles.image} source={{uri: item}}></Image>}
                            keyExtractor={item => item}
                        />
                    </View>

                    <Image style={styles.image} source={{uri: JSON.parse(user.imageLocation)[0]}}></Image>

                    <View style={styles.btnFooter}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit} onPress={() => navigation.navigate('FicheReservation')}>
                            <Text style={styles.submit}>Réserver</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} style={[styles.containerSubmit, styles.bgRed]} onPress={() => navigation.navigate('FenetreChat')}>
                            <Text style={styles.submit}>Contacter</Text>
                        </TouchableOpacity>
                    </View>
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
        marginTop: 80,
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
    description: {
        marginTop: 10,
        marginBottom: 30,
        fontWeight: '400',
    },
    text: {
        textAlign: 'center',
    },
    listItem: {
        marginRight: 15,
        borderRadius: 100,
        minHeight: 30,
        paddingLeft: 12,
        paddingRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        flexWrap: 'wrap',
        borderColor: '#000'
    },
    blocGallery: {
        flexDirection: 'row',
    },
    btnFooter: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 20,
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
    bgRed: {
        backgroundColor: '#FAD4D4',
    },
    submit: {
        fontSize: 16,
    },
    abs: {
        position: 'absolute',
        top: 30,
        right: '5%',
    },
    image: {
        minHeight: 150,
        height: 'auto',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
});