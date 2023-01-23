import {Component} from "react";
import {Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";

export class FormPro extends Component {

    state = {
        confirm: false
    }
    render() {
        return(
            <SafeAreaView style={styles.container}>
                {!this.state.confirm &&
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Vous êtes professionnel ?</Text>
                        </View>

                        <View style={styles.content}>
                            <TextInput style={styles.input} placeholder={'Nom entreprise'} />
                            <TextInput style={styles.input} placeholder={'Numéro de Siret'}
                                       keyboardType={"phone-pad"} />
                            <TextInput style={styles.input}
                                       placeholder={'Références: site web, contact...'} />
                        </View>
                        <View style={styles.button}>
                            <Pressable style={styles.input} onPress={() => this.setState({confirm: true})}>
                                <Text style={{textAlign: "center"}}>Envoyer une demande</Text>
                            </Pressable>
                        </View>
                    </View>
                }
                {this.state.confirm &&
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Votre demande a été envoyé</Text>
                        </View>
                        <View style={styles.button}>
                            <Pressable style={styles.input}>
                                <Text style={{textAlign: "center"}}>Accueil</Text>
                            </Pressable>
                        </View>
                    </View>
                }
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
        fontSize: 25,
        fontWeight: "bold"
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        flex: 2,
        width: '70%'
    },
    input: {
        backgroundColor: '#ddd',
        marginBottom: 10,
        height: 40,
        padding: 10,
    },
    button: {
        width: '70%'
    }
})
