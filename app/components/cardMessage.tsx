import { Component, ReactNode } from "react";
import { View , StyleSheet, Text, Image} from "react-native";

type Props = {
    nom: string,
    photoProfil: string,
    dernierMessage: string,
    id: number,
    idOther: number
}

export default class CardMessage extends Component<Props> {

    state= {
        image : 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'
    }

    componentDidMount() {
        if(this.props.photoProfil !== null)
            this.setState({image: this.props.photoProfil})
    }

    

    render(): ReactNode {
        return (

            <View style={styles.itemMessagerie}>
                <Image style={styles.img} source={{uri: this.state.image}}></Image>
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
        width: 50,
        height: 50
    },
    textMessagerie: {
        flex: 1,
        padding: 10
    },
    nom: {
        fontWeight: '700',
        marginBottom: 8,
    },
})