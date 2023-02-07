import React, { Component, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, Pressable, Modal, ScrollView } from 'react-native';
import { Dimensions } from "react-native";

import IconFilter from '../assets/moduleSVG/filterSVG'
import IconStarFilled from '../assets/moduleSVG/starFilledPink'
import IconStar from '../assets/moduleSVG/starNotFilled'
import RadioButtonBis from './radioButtonBis';
import Svg, { Path } from 'react-native-svg';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/* TODO modification affichage des etoiles selon selection */

export default class Filter extends Component {

    typePro = [
        {
            id: 'pro',
            value: 'Professionnels',
            bg: '#FAD4D4'
        },
        {
            id: 'particulier',
            value: 'Particulier',
            bg: '#CEEAF0',
        },
    ];

    typeChoice = [
        {
            id: 'chienType',
            value: 'Chien',
            bg: '#FAD4D4'
        },
        {
            id: 'chatType',
            value: 'Chat',
            bg: '#D9FFCB',
        },
    ];

    poids = [
        {
            gabarit: 'Petit',
            tranche: '0-7 kg',
            bg: '#FFF6E3',
        },
        {
            gabarit: 'Moyen',
            tranche: '7-18 kg',
            bg: '#D9FFCB',
        },
        {
            gabarit: 'Grand',
            tranche: '18-45 kg',
            bg: '#CEEAF0',
        },
        {
            gabarit: 'Géant',
            tranche: '45+ kg',
            bg: '#FAD4D4',
        },
    ]

    distance = [
        {
            id: 'd5',
            value: '5'
        },
        {
            id: 'd10',
            value: '10'
        },
        {
            id: 'd25',
            value: '25'
        },
        {
            id: 'd40',
            value: '40'
        },
        {
            id: 'd50',
            value: '50+'
        },
    ]

    prix = [
        {
            id: 'p5',
            value: '5'
        },
        {
            id: 'p10',
            value: '10'
        },
        {
            id: 'p25',
            value: '25'
        },
        {
            id: 'p40',
            value: '40'
        },
        {
            id: 'p50',
            value: '50+'
        },
    ]

    state = {
        modalVisible: false,
    }

    render() {

        var bg = ['#B4B4B4', '#FAD4D4'];


        var stars = [];

        for (let i = 0; i < 5; i++) {

            stars.push(
                <Pressable key={i} style={styles.star}>
                    <IconStar fill= {bg[0]}></IconStar>
                </Pressable>
            )
        }

        var modifStars = (x) => {
            for (let i = 0; i < x; i++) {
                stars.map((i) => <Pressable key={i} style={styles.star} onPress={() => modifStars(i)}>
                     <IconStar fill= {bg[1]}></IconStar>
                </Pressable>)
            }

            for (let i = x; i < 5; i++) {
                stars.map((i) => <Pressable key={i} style={styles.star} onPress={() => modifStars(i)}>
                     <IconStar fill= {bg[0]}></IconStar>
                </Pressable>)
            }

            console.log(stars);
        }

        return (
            <SafeAreaView>
                <TouchableOpacity activeOpacity={.7} style={styles.content}
                    onPress={() => this.setState({ modalVisible: true })}>
                    <IconFilter></IconFilter>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}

                    onRequestClose={() => {
                        this.setState({ modalVisible: 2 })
                    }
                    }>
                        <SafeAreaView>
                    <ScrollView>
                        <View style={styles.modal}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setState({ modalVisible: false })
                                }>
                                <Text style={styles.textStyle}>X</Text>
                            </Pressable>
                            <View style={styles.modalContainer}>
                                <View>
                                    <Text style={styles.modalText}>Type</Text>
                                    <FlatList
                                        horizontal={true}
                                        data={this.typePro}
                                        renderItem={({ item }) => <TouchableOpacity activeOpacity={.7} style={[{ backgroundColor: item.bg }, styles.listItem]}><Text>{item.value}</Text></TouchableOpacity>}
                                        keyExtractor={item => item.id}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.modalText}>Animaux</Text>
                                    <FlatList
                                        horizontal={true}
                                        data={this.typeChoice}
                                        renderItem={({ item }) => <TouchableOpacity activeOpacity={.7} style={[{ backgroundColor: item.bg }, styles.listItem]}><Text>{item.value}</Text></TouchableOpacity>}
                                        keyExtractor={item => item.id}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.modalText}>Poids</Text>
                                    <FlatList
                                        horizontal={true}
                                        data={this.poids}
                                        renderItem={({ item }) => <TouchableOpacity activeOpacity={.7} style={[{ backgroundColor: item.bg }, styles.listItem]}><Text>{item.gabarit} :  {item.tranche}</Text></TouchableOpacity>}
                                        keyExtractor={item => item.gabarit}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.modalText}>Distance km</Text>
                                    <View>
                                        <View style={styles.line}></View>
                                        <RadioButtonBis data={this.distance} onSelect={undefined} />
                                    </View>
                                </View>

                                <View>
                                    <Text style={styles.modalText}>Avis</Text>
                                    <View style={styles.starContainer}>
                                        {stars}
                                    </View>
                                </View>

                                <View>
                                    <Text style={styles.modalText}>Prix</Text>
                                    <View>
                                        <View style={styles.line}></View>
                                        <RadioButtonBis data={this.prix} onSelect={undefined} />
                                    </View>
                                </View>

                                <View style={styles.bloc}>
                                    <TouchableOpacity activeOpacity={0.8}
                                        style={styles.containerSubmit}
                                        onPress={() => this.setState({ modalVisible: false })}>
                                        <Text style={styles.submit}>Appliquer mes choix</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    </SafeAreaView>
                </Modal>
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
    modal: {
        width: width,
        margin: 'auto',
        padding: 20,
    },
    modalContainer: {
        backgroundColor: '#FFF',

    },
    modalText: {
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 20,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 50,
        alignSelf: 'flex-end',
        marginRight: '5%',
    },
    buttonClose: {
        backgroundColor: '#CEEAF0',
        marginBottom: 10,
    },
    textStyle: {
        color: '#000',
        fontWeight: 'bold',
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
    },
    starContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    star: {
        marginRight: 30,
    },
    line: {
        position: 'absolute',
        top: 9,
        width: '90%',
        height: 2,
        backgroundColor: '#000',
    },
    bloc: {
        width: '100%',
        alignItems: 'center',
    },
    containerSubmit: {
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 20,
        width: '80%',
        backgroundColor: '#FAD4D4',
    },
    submit: {
        fontSize: 16,
    },
});
