import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, ScrollView } from 'react-native';
import { Dimensions } from "react-native";

import IconParameter from '../assets/moduleSVG/parametresSVG'
import LoupeSVG from '../assets/moduleSVG/loupeSVG';
import ModalParameter from "../components/modalParameter";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function Messagerie({ navigation }) {

    const [parameter, setParameter] = React.useState(false);

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => setParameter(true)} onPressOut={() => setParameter(false)}>
                    <IconParameter></IconParameter>
                </TouchableOpacity>
                <View style={[styles.wrapper, styles.bloc]}>
                    <View style={styles.blocSearch}>
                        <LoupeSVG></LoupeSVG>
                        <TextInput style={styles.textSearch} placeholder="Rechercher un contact"></TextInput>
                    </View>

                    <View style={styles.blocMessagerie}>
                        {/* Futur composant ? */}
                        <View style={styles.itemMessagerie}>
                            <Image style={styles.img} source={require('../assets/messagerie1.png')}></Image>
                            <View style={styles.textMessagerie}>
                                <Text style={styles.nom}>Benoit</Text>
                                <Text>On fait comme ça</Text>
                            </View>
                            <Text>12h00</Text>
                        </View>

                        <View style={styles.itemMessagerie}>
                            <Image style={styles.img} source={require('../assets/messagerie2.png')}></Image>
                            <View>
                            <Text style={styles.nom}>Lily</Text>
                            <Text>:)</Text>
                            </View>
                            <Text>12h00</Text>
                        </View>
                    </View>
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
        borderRadius: 5,
        padding: 18,
    },
    blocSearch: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    textSearch: {
        marginLeft: 8,
    },
    blocMessagerie: {
        width: '100%',
        marginTop: 30,
    },
    itemMessagerie: {
        marginTop: 30,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textMessagerie: {

    },
    nom: {
        fontWeight: '700',
        marginBottom: 8,
    },
    img: {
        borderRadius: 50,
    },
    abs: {
        position: 'absolute',
        top: 30,
        right: '5%',
    },
});
