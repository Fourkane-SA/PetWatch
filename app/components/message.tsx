import { Component, ReactNode } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
    message: string
    imageSender: string
    isMe: boolean
}

export default class Message extends Component<Props> {
    render() {
        return(
            <View style={styles.container}>
                { !this.props.isMe &&
                <View style={styles.profil}>
                    <Image style={styles.image} source={require('../assets/photo-profil.png')}></Image>
                </View>
                }
                <View style={styles.message}>
                    <Text>{this.props.message}</Text>
                </View>
                { this.props.isMe &&
                <View style={styles.profil}>
                    <Image style={styles.image} source={require('../assets/photo-profil.png')}></Image>
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
        padding: 20,
    },
    image: {
        minHeight: 40,
        height: 60,
        width: 60,
        alignSelf: 'center',
        marginBottom: 10,
    },
    profil: {
        flex: 1,
        height: 60

    }
})