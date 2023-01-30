import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*TODO requete pour ajouter le professionnel + "message compte verifier et accepter" puis continuer sur le mode de garde "*/

export default class CreationCompteParticulier extends Component {
    state = {
        confirm: false
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                {!this.state.confirm &&
                <><Text style={styles.title}>Vous êtes un Professionnel ?</Text><View style={styles.blocInscription}>
                        <View>
                            <TextInput placeholder="Nom entreprise" style={[styles.champ, styles.identity]}></TextInput>
                            <TextInput placeholder="Numéro de SIRET" style={[styles.champ, , styles.identity]}></TextInput>
                            <TextInput placeholder="Site web" style={[styles.champ, , styles.identity]}></TextInput>
                            <TextInput placeholder="Téléphone professionnel" style={[styles.champ, , styles.identity]}></TextInput>
                            <TextInput placeholder="Mail professionnel" style={[styles.champ, styles.identity]}></TextInput>
                        </View>

                        <View>
                            <TextInput placeholder="Adresse" style={[styles.champ, styles.adresse]}></TextInput>
                            <TextInput placeholder="Ville" style={[styles.champ, , styles.adresse]}></TextInput>
                            <TextInput placeholder="Code postal" style={[styles.champ, styles.adresse]}></TextInput>
                        </View>

                        <View>
                            <TextInput placeholder="Mot de passe" style={[styles.champ, styles.mdp]} secureTextEntry={true}></TextInput>
                        </View>

                        <View>
                        </View>

                        <TouchableOpacity activeOpacity={0.8} style={[styles.champ, styles.containerSubmit]} 
                        onPress={() => this.setState({confirm: true})}>
                            <Text style={styles.submit}>Envoyer une demande</Text>
                        </TouchableOpacity>
                    </View></>
                }

                {this.state.confirm &&
                    <View style={styles.container}>
                        <View >
                            <Text style={styles.text}>Votre demande a été envoyé</Text>
                            <Text style={styles.text}>TODO Redirection sur mode de garde ou autre</Text>
                        </View>
                        
                    </View>
                }
            </SafeAreaView>
        );
    }
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
    text: {
        fontSize: 26
    }
});