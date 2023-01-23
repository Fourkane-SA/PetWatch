import {Component} from "react";
import {Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";

export class ChoiceRole extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Bienvenue</Text>
                </View>
                <View style={styles.content}>
                    <Text>Je suis un</Text>
                    <Pressable style={styles.input}>
                        <Text style={styles.button}>Particulier</Text>
                    </Pressable>
                    <Pressable style={styles.input} onPress={() => this.props.navigation.navigate('formPro')}>
                        <Text style={styles.button}>Professionnel</Text>
                    </Pressable>
                    <Pressable style={styles.input}>
                        <Text style={styles.button}>Pet-sitter</Text>
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
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 32,
        fontWeight: "bold"
    },
    content: {
        flex: 2,
        width: '70%'
    },
    input: {
        backgroundColor: '#ddd',
        marginBottom: 10,
        height: 40,
        padding: 5,
    },
    button: {
        textAlign: "center",
        alignContent: "center",
        marginTop: 5
    }
})
