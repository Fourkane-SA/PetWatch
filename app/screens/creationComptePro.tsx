import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Button} from 'react-native';
import { Dimensions } from "react-native";
import React from "react";
import axios from "axios/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*TODO requete pour ajouter le professionnel + "message compte verifier et accepter" puis continuer sur le mode de garde "*/

export default class CreationCompteParticulier extends Component {
    state = {
        confirm: false,
        entreprise: '',
        siret: '',
        site: '',
        telephone: '',
        mail: '',
        adresse: '',
        ville: '',
        codePostal: '',
        motDePasse: '',
        messageErreur: ''
    }

    async inscription() {
        try {
            const token = (await axios.post('/users', {
                password: this.state.motDePasse,
                email: this.state.mail,
                phoneNumber: this.state.telephone,
                role: 'company',
                city: this.state.ville,
                postalCode: this.state.codePostal,
                address: this.state.adresse,
                companyName: this.state.entreprise,
                siretNumber: this.state.siret,
                website: this.state.site
            })).data
            await AsyncStorage.setItem('token', token)
            this.setState({confirm: true})
        } catch (e) {
            this.setState({messageErreur: e.response.data})
        }
    }

    render() {

        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {!this.state.confirm &&
                    <><Text style={styles.title}>Vous êtes un Professionnel ?</Text><View style={styles.blocInscription}>
                            <View>
                                <TextInput placeholder="Nom entreprise" style={[styles.champ, styles.identity]} value={this.state.entreprise} onChangeText={(value) => this.setState({entreprise: value})}></TextInput>
                                <TextInput placeholder="Numéro de SIRET" style={[styles.champ, , styles.identity]} value={this.state.siret} onChangeText={(value) => this.setState({siret: value})}></TextInput>
                                <TextInput placeholder="Site web" style={[styles.champ, , styles.identity]} value={this.state.site} onChangeText={(value) => this.setState({site: value})}></TextInput>
                                <TextInput placeholder="Téléphone professionnel" style={[styles.champ, , styles.identity]} value={this.state.telephone} onChangeText={(value) => this.setState({telephone: value})}></TextInput>
                                <TextInput placeholder="Mail professionnel" style={[styles.champ, styles.identity]} value={this.state.mail} onChangeText={(value) => this.setState({mail: value})}></TextInput>
                            </View>

                            <View>
                                <TextInput placeholder="Adresse" style={[styles.champ, styles.adresse]} value={this.state.adresse} onChangeText={(value) => this.setState({adresse: value})}></TextInput>
                                <TextInput placeholder="Ville" style={[styles.champ, , styles.adresse]} value={this.state.ville} onChangeText={(value) => this.setState({ville: value})}></TextInput>
                                <TextInput placeholder="Code postal" style={[styles.champ, styles.adresse]} value={this.state.codePostal} onChangeText={(value) => this.setState({codePostal: value})}></TextInput>
                            </View>

                            <View>
                                <TextInput placeholder="Mot de passe" style={[styles.champ, styles.mdp]} secureTextEntry={true} value={this.state.motDePasse} onChangeText={(value) => this.setState({motDePasse: value})}></TextInput>
                            </View>

                            <View>
                            </View>
                        {this.state.messageErreur !== '' &&
                            <Text style={styles.erreur}>{this.state.messageErreur}</Text>
                        }
                            <TouchableOpacity activeOpacity={0.8} style={[styles.champ, styles.containerSubmit]}
                            onPress={() => this.inscription()}>
                                <Text style={styles.submit}>Envoyer une demande</Text>
                            </TouchableOpacity>
                        </View></>
                    }

                    {this.state.confirm &&
                        <View style={styles.container}>
                            <View >
                                <Text style={styles.text}>Votre demande a été envoyé</Text>
                                <TouchableOpacity activeOpacity={0.8} style={[styles.champ, styles.containerSubmit]}
                                onPress={() => this.props.navigation.navigate('ModeGarde')}>
                                    <Text>Definir le mode de garde</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    }
                </SafeAreaView>
            </ScrollView>
        );
    }
/*export default function CreationComptePro({navigation}) {
    const [entreprise, setEntreprise] = React.useState()
    const [siret, setSiret] = React.useState()
    const [site, setSite] = React.useState()
    const [telephone, setTelephone] = React.useState()
    const [mail, setMail] = React.useState()
    const [adresse, setAdresse] = React.useState()
    const [ville, setVille] = React.useState()
    const [codePostal, setCodePostal] = React.useState()
    const [motDePasse, setMotDePasse] = React.useState()
    const [messageErreur, setMessageErreur] = React.useState()

    async  function inscription() {
        try {
            const token = (await axios.post('/users', {
                password: motDePasse,
                email: mail,
                phoneNumber: telephone,
                role: 'company',
                city: ville,
                postalCode: codePostal,
                address: adresse,
                companyName: entreprise,
                siretNumber: siret,
                website: site
            })).data
            await AsyncStorage.setItem('token', token)
            navigation.navigate('Home')
        } catch (e) {
            setMessageErreur(e.response.data)
        }
    }
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Vous êtes un Professionnel ?</Text>

                <View style={styles.blocInscription}>
                    <View>
                        <TextInput placeholder="Nom entreprise" style={[styles.champ, styles.identity]} value={entreprise} onChangeText={setEntreprise}></TextInput>
                        <TextInput placeholder="Numéro de SIRET" style={[styles.champ, , styles.identity]} value={siret} onChangeText={setSiret}></TextInput>
                        <TextInput placeholder="Site web" style={[styles.champ, , styles.identity]} value={site} onChangeText={setSite}></TextInput>
                        <TextInput placeholder="Téléphone professionnel" style={[styles.champ, styles.identity]} value={telephone} onChangeText={setTelephone}></TextInput>
                        <TextInput placeholder="Mail professionnel" style={[styles.champ, styles.identity]} value={mail} onChangeText={setMail}></TextInput>
                    </View>

                    <View>
                        <TextInput placeholder="Adresse" style={[styles.champ, styles.adresse]} value={adresse} onChangeText={setAdresse}></TextInput>
                        <TextInput placeholder="Ville" style={[styles.champ, styles.adresse]} value={ville} onChangeText={setVille}></TextInput>
                        <TextInput placeholder="Code postal" style={[styles.champ, styles.adresse]} value={codePostal} onChangeText={setCodePostal}></TextInput>
                    </View>

                    <View>
                        <TextInput placeholder="Mot de passe" style={[styles.champ, styles.mdp]} secureTextEntry={true} value={motDePasse} onChangeText={setMotDePasse}></TextInput>
                    </View>

                    <View>
                    </View>

                    {messageErreur !== '' && <Text style={styles.erreur}>{messageErreur}</Text>}
                    <TouchableOpacity activeOpacity={0.8} style={[styles.champ,styles.containerSubmit]} onPress={() => inscription()}>
                        <Text style={styles.submit}>Envoyer une demande</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );*/
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
        alignItems: 'center',
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
    text: {
        fontSize: 26
    }
});
