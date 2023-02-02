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

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function FicheProfilPro({ navigation }) {

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
            src : require('../assets/galerie1.png')
        },
        {
            id: 'img2',
            src : require('../assets/galerie2.png')
        },
    ]

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
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
                        <Text style={styles.text}>KeepPet</Text>
                        <IconPro></IconPro>
                        <Text style={styles.text}>Professionnel</Text>
                    </View>

                    <View style={styles.address}>
                        <IconMarker></IconMarker>
                        <Text style={[styles.text, styles.city]}>Lyon, 69001</Text>
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
                        <Text style={styles.text}>20€/jour</Text>
                    </View>

                    <FlatList
                        horizontal={true}
                        data={poids}
                        renderItem={({ item }) => <TouchableOpacity activeOpacity={.7} style={[{ backgroundColor: item.bg }, { borderWidth: item.borderWidth }, styles.listItem]}><Text>{item.gabarit} :  {item.tranche}</Text></TouchableOpacity>}
                        keyExtractor={item => item.gabarit}
                    />

                    <View style={styles.description}>
                        <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. </Text>
                    </View>

                    <View style={styles.blocGallery}>
                    <FlatList
                        horizontal={true}
                        data={gallery}
                        renderItem={({ item }) => <Image source={item.src}></Image>}
                        keyExtractor={item => item.id}
                    />
                    </View>

                    <View style={styles.btnFooter}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit}>
                            <Text style={styles.submit}>Réserver</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} style={[styles.containerSubmit, styles.bgRed]}>
                            <Text style={styles.submit}>Contacter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
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
});