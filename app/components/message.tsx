import axios from "axios";
import { Component, ReactNode } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { User } from "../models/User";

type Props = {
    message: string
    idSender: string
    isMe: boolean
}

export default class Message extends Component<Props> {


    state = {
        user: null
    }

    async componentDidMount() {
        const user: User = (await axios.get('/users/' + this.props.idSender)).data
        console.log(user)
        this.setState({user: user})
    }

    render() {
        return(
            <View style={styles.container}>
                { !this.props.isMe && this.state.user !== null &&
                <View style={styles.profil}>
                    <Image style={styles.image} source={{uri: this.state.user.profilImage || 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'}}></Image>
                </View>
                }
                <View style={styles.message}>
                    <Text>{this.props.message}</Text>
                </View>
                { this.props.isMe && this.state.user !== null &&
                <View style={styles.profil}>
                    <Image style={styles.image} source={{uri: this.state.user.profilImage || 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'}}></Image>
                </View>
                }
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: "row",
        marginBottom: 20
    },
    message: {
        backgroundColor: '#CEEAF0',
        width: '80%',
        borderRadius: 13,
        paddingTop: 20,
        alignItems: "center"
    },
    image: {
        minHeight: 30,
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 500
    },
    profil: {
        padding: 5
    }
})