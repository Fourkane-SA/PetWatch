import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*TODO requete pour ajouter utilisateur  et le connecter + ajouter animal ou type d'animal gardé selon role*/ 

export default function CreationCompteParticulier() {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Vous êtes un particulier ?</Text>

            <View style={styles.blocInscription}>
                <View>
                    <TextInput placeholder="Nom" style={[styles.champ, styles.identity]}></TextInput>
                    <TextInput placeholder="Prénom" style={[styles.champ, , styles.identity]}></TextInput>
                    <TextInput placeholder="Adresse mail" style={[styles.champ, , styles.identity]}></TextInput>
                    <TextInput placeholder="Nom" style={[styles.champ, , styles.identity]}></TextInput>
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

                <TouchableOpacity activeOpacity={0.8} style={[styles.champ,styles.containerSubmit]}>
                    <Text style={styles.submit}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
});