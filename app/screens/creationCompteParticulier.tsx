import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import { Dimensions } from "react-native";
import React from "react";
import axios from "axios/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



/*TODO requete pour ajouter utilisateur  et le connecter + ajouter animal ou type d'animal gardé selon role*/



export default function CreationCompteParticulier({navigation}) {
    const [nom, setNom] = React.useState()
    const [prenom, setPrenom] = React.useState()
    const [mail, setMail] = React.useState()
    const [numero, setNumero] = React.useState()
    const [adresse, setAdresse] = React.useState()
    const [ville, setVille] = React.useState()
    const [codePostal, setCodePostal] = React.useState()
    const [motDePasse, setMotDePasse] = React.useState()
    const [messageErreur, setMessageErreur] = React.useState()

    async function inscription() {
        try {
            const data = {
                password: motDePasse,
                email: mail,
                phoneNumber: numero,
                role: 'individual',
                city: ville,
                postalCode: codePostal,
                address: adresse,
                firstname: prenom,
                lastname: nom
            }
            const token =  (await axios.post('/users',data )).data
            await AsyncStorage.setItem('token', token) // connexion
            navigation.navigate('AddAnimal')

        } catch (e) {
            //console.log(e.response.data)
            setMessageErreur(e.response.data)
        }
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Vous êtes un Particulier ?</Text>

                <View style={styles.blocInscription}>
                    <View>
                        <TextInput placeholder="Nom" style={[styles.champ, styles.identity]} value={nom} onChangeText={setNom}></TextInput>
                        <TextInput placeholder="Prénom" style={[styles.champ, styles.identity]} onChangeText={setPrenom}></TextInput>
                        <TextInput placeholder="Adresse mail" style={[styles.champ, styles.identity]} onChangeText={setMail}></TextInput>
                        <TextInput placeholder="Numéro de téléphone" style={[styles.champ, styles.identity]} onChangeText={setNumero}></TextInput>
                    </View>

                    <View>
                        <TextInput placeholder="Adresse" style={[styles.champ, styles.adresse]} onChangeText={setAdresse}></TextInput>
                        <TextInput placeholder="Ville" style={[styles.champ, styles.adresse]} onChangeText={setVille}></TextInput>
                        <TextInput placeholder="Code postal" style={[styles.champ, styles.adresse]} onChangeText={setCodePostal}></TextInput>
                    </View>

                    <View>
                        <TextInput placeholder="Mot de passe" style={[styles.champ, styles.mdp]} secureTextEntry={true} onChangeText={setMotDePasse}></TextInput>
                    </View>

                    <View>
                    </View>

                    {messageErreur !== '' && <Text style={styles.erreur}>{messageErreur}</Text>}
                    <TouchableOpacity activeOpacity={0.8} style={[styles.champ,styles.containerSubmit]} onPress={() => inscription()}>
                        <Text style={styles.submit}>S'inscrire</Text>
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
    blocInscription: {
        width: '90%',
    },
    title: {
        fontSize: 46,
        fontWeight: '700',
        marginTop: 65,
        marginBottom: 45,
    },
    champ: {
        minHeight: 50,
        fontSize: 16,
        marginBottom: 18,
        borderRadius: 5,
        paddingLeft: 20,
    },
    containerSubmit: {
        minHeight: 50,
        backgroundColor: '#FAD4D4',
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
        backgroundColor: '#CEEAF0',
    },
    erreur: {
    textAlign: "center",
    marginTop: 10,
    color: 'red',
    fontSize: 16
    },
});
