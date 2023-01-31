import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, Pressable, Modal } from 'react-native';
import { Dimensions } from "react-native";

import IconFilter from '../assets/moduleSVG/filterSVG'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*Ici passage de parametre par rapport a la page checkReservation car selon l'animal le background change de couleur et egalement l'icon !!!!! */

export default class CardDemandeReservation extends Component {

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
            value: '40'
        },
        {
            id: 'd40',
            value: 'Chat'
        },
        {
            id: 'd50',
            value: '50+'
        },
        {
            id: 'chatType',
            value: 'Chat'
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
            value: '40'
        },
        {
            id: 'p40',
            value: 'Chat'
        },
        {
            id: 'p50',
            value: '50+'
        },
    ]

    state = {
        modalVisible: false
    }

    render() {
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
                    <View style={styles.modal}>
                        <View style={styles.modal}>
                            <Text style={styles.modalText}>Type</Text>
                            <Text style={styles.modalText}>Animaux</Text>
                            <Text style={styles.modalText}>Poids</Text>
                            <Text style={styles.modalText}>Distance km</Text>
                            <Text style={styles.modalText}>Avis</Text>
                            <Text style={styles.modalText}>Prix</Text>




                            <TouchableOpacity activeOpacity={0.8}
                                style={styles.containerSubmit}
                                onPress={() => this.setState({ modalVisible: false })}>
                                <Text style={styles.submit}>Appliquer mes choix</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        minHeight: height,
        margin: 'auto',
    },
    modalText: {
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'left'
    },
    containerSubmit: {
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 20,
        width: '40%',
        backgroundColor: '#FAD4D4',
    },
    submit: {
        fontSize: 16,
    },
});