import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image} from 'react-native';
import { Dimensions } from "react-native";
import React from "react";
import axios from "axios/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

import IconModif from '../assets/moduleSVG/iconModif'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

/*TODO Code A modifier pour faire une modification de profil + value par defaut dans les input sont infos du compte */

export default function ModifProfilParticulier({navigation}) {

    // const [nom, setNom] = React.useState()
    // const [prenom, setPrenom] = React.useState()
    // const [mail, setMail] = React.useState()
    // const [numero, setNumero] = React.useState()
    // const [adresse, setAdresse] = React.useState()
    // const [ville, setVille] = React.useState()
    // const [codePostal, setCodePostal] = React.useState()
    // const [motDePasse, setMotDePasse] = React.useState()
    // const [messageErreur, setMessageErreur] = React.useState()

    // async function inscription() {
    //     try {
    //         const data = {
    //             password: motDePasse,
    //             email: mail,
    //             phoneNumber: numero,
    //             role: 'individual',
    //             city: ville,
    //             postalCode: codePostal,
    //             address: adresse,
    //             firstname: prenom,
    //             lastname: nom
    //         }
    //         const token =  (await axios.post('/users',data )).data
    //         await AsyncStorage.setItem('token', token) // connexion
    //         navigation.navigate('AddAnimal')

    //     } catch (e) {
    //         //console.log(e.response.data)
    //         setMessageErreur(e.response.data)
    //     }
    // }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.blocModification}>
                    <View style={styles.blocAvatar}>
                        <Image style={[styles.img]} source={require('../assets/photo-profil.png')}/>
                        <View style={[styles.icon, {left: (Dimensions.get('window').width *0.9) /2 + 15 } ]}>
                            <TouchableOpacity activeOpacity={.7}>
                                <IconModif></IconModif>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <TextInput placeholder="Nom" value="Nina" style={[styles.champ, styles.identity]} ></TextInput>
                        <TextInput placeholder="Prénom" value="Ricci" style={[styles.champ, styles.identity]}></TextInput>
                        <TextInput placeholder="Adresse mail" value="mail@mail.fr" style={[styles.champ, styles.identity]}></TextInput>
                        <TextInput placeholder="Numéro de téléphone" value="0606060606" style={[styles.champ, styles.identity]}></TextInput>
                    </View>

                    <View>
                        <TextInput placeholder="Adresse" value="Rue de Marseille" style={[styles.champ, styles.adresse]}></TextInput>
                        <TextInput placeholder="Ville" value="Lyon" style={[styles.champ, styles.adresse]}></TextInput>
                        <TextInput placeholder="Code postal" value="69007" style={[styles.champ, styles.adresse]}></TextInput>
                    </View>

                    <View>
                        <TextInput placeholder="Nouveau mot de passe" style={[styles.champ, styles.mdp]} secureTextEntry={true}></TextInput>
                        <TextInput placeholder="Mot de passe actuel" style={[styles.champ, styles.mdp]} secureTextEntry={true}></TextInput>
                    </View>

                    <TouchableOpacity activeOpacity={0.8} style={[styles.champ,styles.containerSubmit]}>
                        <Text style={styles.submit}>Mettre à jour</Text>
                    </TouchableOpacity>

                </View>
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
        width: width
    },
    blocModification: {
        width: '90%',
    },
    blocAvatar: {
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 50,
        position: 'relative',
    },
    title: {
        fontSize: 46,
        fontWeight: '700',
        marginTop: 65,
        marginBottom: 45,
        alignItems: 'center',
    },
    champ: {
        minHeight: 50,
        fontSize: 16,
        marginBottom: 18,
        borderRadius: 5,
        paddingLeft: 20,
    },
    img: {
        width: 72,
        height: 72,
        borderRadius: 500,
    },
    icon: {
        position: 'absolute',
        bottom: -10,
        left: '50%',
    },
    containerSubmit: {
        minHeight: 50,
        backgroundColor: '#CEEAF0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 30,
    },
    submit: {
        fontSize: 16,
    },
    identity: {
        backgroundColor: '#FFF6E3'
    },
    adresse: {
        backgroundColor: '#D9FFCB',
    },
    mdp: {
        backgroundColor: '#FAD4D4',
    },
    erreur: {
    textAlign: "center",
    marginTop: 10,
    color: 'red',
    fontSize: 16
    },
});
