import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import { Link } from '@react-navigation/native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



/* TODO : Axios connexion */ 


export default function App({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bienvenue</Text>

            <View style={styles.blocSignIn}>
                <TextInput style={styles.textInput} placeholder="Adresse mail"></TextInput>
                <TextInput style={styles.textInput} placeholder="Mot de passe" ></TextInput>

                <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.8} >
                    <Text style={styles.btnText}>Se connecter</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.option}>ou</Text>

            <View style={styles.blocSignUp}>
                <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.8}>
                    <Text style={styles.btnText}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        width: width,
        height: height,
    },
    title: {
        fontSize: 46,
        color: '#000',
        fontWeight: '700',
        marginTop: 140,
        marginBottom: 70,
    },
    blocSignIn: {
        width: '90%',
        marginBottom: 60,
    },
    blocSignUp: {
        width: '90%',
        marginTop: 60,
    },
    textInput: {
        backgroundColor: '#FFF6E3',
        minHeight: 50,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 15,
    },
    btnPrimary: {
        minHeight: 50,
        backgroundColor: '#FAD4D4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 16,
    },
    option: {
        fontSize: 18,
        fontWeight: '700',
    }
});
