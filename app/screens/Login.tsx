import {Component} from "react";
import {Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';


interface Props {
    navigation: any
}

export default class Login extends Component<Props> {
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.title}>Bienvenue</Text>
                </View>
                <View style={styles.groupButton}>
                    <TextInput style={styles.input} placeholder={'Login'}></TextInput>
                    <TextInput style={styles.input} placeholder={'Mot de passe'} secureTextEntry={true}></TextInput>
                    <Pressable style={styles.input} onPress={() => this.props.navigation.navigate('choiceRole')}>
                        <Text style={styles.button}>Se connecter</Text>
                    </Pressable>
                    {/*<Button title={'Se connecter'}></Button>*/}
                    <Text style={styles.link}>J'ai oublié mon mot de passe</Text>
                </View>
                <View style={styles.groupButton}>
                    <Text style={styles.inscriptionText}>S'inscrire via :</Text>
                    <Pressable style={styles.input}>
                        <Text style={styles.button}>Google</Text>
                    </Pressable>
                    <Pressable style={styles.input}>
                        <Text style={styles.button}>Facebook</Text>
                    </Pressable>
                    <Pressable style={styles.input}>
                        <Text style={styles.button}>Mail</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: "center"
    },
    title: {
        fontSize: 32,
        fontWeight: "bold"
    },
    head: {
        flex: 1,
        justifyContent: "center",
    },
    groupButton: {
        flex: 1,
        width: '70%',
    },
    input: {
        backgroundColor: '#ddd',
        marginBottom: 10,
        height: 40,
        padding: 5
    },
    link: {
        fontWeight: "bold"
    },
    button: {
        textAlign: "center",
        alignContent: "center",
        marginTop: 5
    },
    inscriptionText: {
        marginBottom: 10
    }
})
