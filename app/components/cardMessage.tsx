import { Component, ReactNode } from "react";
import { View , StyleSheet, Text, Image} from "react-native";

type Props = {
    nom: string,
    photoProfil: string,
    dernierMessage: string,
    id: number
}

export default class CardMessage extends Component<Props> {
    render(): ReactNode {
        return (

            <View style={styles.itemMessagerie}>
                <Image style={styles.img} source={require('../assets/messagerie1.png')}></Image>
                <View style={styles.textMessagerie}>
                    <Text style={styles.nom}>{this.props.nom}</Text>
                    <Text>{this.props.dernierMessage}</Text>
                </View>
                {/* <Text>12h00</Text> */}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    itemMessagerie: {
        marginTop: 30,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        textAlign: "center"
    },
    img: {
        borderRadius: 50,
    },
    textMessagerie: {
        textAlign: "center"
    },
    nom: {
        fontWeight: '700',
        marginBottom: 8,
    },
})