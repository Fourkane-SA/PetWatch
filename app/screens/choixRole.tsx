import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*Afficher le formulaire d'inscription selon role choisi */

export default function CreationCompteParticulier({navigation}) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Création de compte</Text>

            <View style={styles.choix}>
                <Text style={styles.subtitle}>Je suis un...</Text>

                <TouchableOpacity activeOpacity={0.8} style={[styles.btn,styles.particulier]} onPress={() => navigation.navigate('CreationCompteParticulier')}>
                    <Text style={styles.btnText}>Particulier</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={[styles.btn,styles.professionnel]} onPress={() => navigation.navigate('CreationComptePro')}>
                    <Text style={styles.btnText}>Professionnel</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={[styles.btn,styles.petsitter]}>
                    <Text style={styles.btnText}>Pet-Sitter</Text>
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
    choix: {
        width: '90%',
    },
    title: {
        fontSize: 46,
        fontWeight: '700',
        marginTop: 65,
        marginBottom: 45,
    },
    btn: {
        minHeight: 50,
        fontSize: 16,
        marginBottom: 18,
        borderRadius: 5,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    professionnel: {
        backgroundColor: '#FFF6E3'
    },
    petsitter: {
        backgroundColor: '#FAD4D4',
    },
    particulier: {
        backgroundColor: '#CEEAF0',
    },
    btnText: {
        fontSize: 16,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 35,
    }
});
