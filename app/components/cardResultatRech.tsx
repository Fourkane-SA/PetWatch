import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { Dimensions } from "react-native";
import {useNavigation} from "@react-navigation/native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'
import IconPro from '../assets/moduleSVG/iconPro'
import IconParticulier from '../assets/moduleSVG/iconParticulier'
import IconMarker from '../assets/moduleSVG/iconMarker'
import IconStarFilled from '../assets/moduleSVG/starFilled'
import {User} from "../models/User";
import axios from "axios/index";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Props {
    navigation
    id
}


export default class CardDemandeReservation extends Component<Props> {

    state = {
        user: null,
        avis: 0
    }

    async componentDidMount() {
        const user: User = (await axios.get('/users/'+this.props.id)).data
        user.companyName
        this.setState({user: user})
    }

    render() {
        const redirection = () => {
            this.props.navigation.navigate('FicheProfilPro', {id: this.props.id});
        }

        return (
            <SafeAreaView style={styles.container}>
                { this.state.user !== null &&
                    <>
                        <View style={[styles.wrapper, styles.bloc]}>
                            <View style={styles.header}>
                                <View style={styles.blocAvis}>
                                    <Text style={styles.textAvis}>{this.state.avis} avis</Text>
                                </View>

                                <Image style={[styles.img, {left: Dimensions.get('window').width /2 - 72}]} source={{uri: this.state.user.profilImage || 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'}} />

                                <View style={styles.blocIcon}>
                                    {this.state.user.keepDogs && <IconChien></IconChien>}
                                    {this.state.user.keepCats && <IconChat></IconChat>}
                                </View>
                            </View>

                            <View style={styles.identity}>
                                <Text style={styles.text}>{(this.state.user.firstname + this.state.user.lastname) || this.state.user.companyName}</Text>
                                <IconPro></IconPro>
                                <Text style={styles.text}>Professionnel</Text>
                            </View>

                            <View style={styles.address}>
                                <IconMarker></IconMarker>
                                <Text style={[styles.text, styles.city]}>{this.state.user.city}, {this.state.user.postalCode}</Text>
                            </View>

                            <View style={styles.stars}>
                                <IconStarFilled></IconStarFilled>
                                <IconStarFilled></IconStarFilled>
                                <IconStarFilled></IconStarFilled>
                                <IconStarFilled></IconStarFilled>
                                <IconStarFilled></IconStarFilled>
                            </View>

                            <View style={styles.pricing}>
                                <Text style={styles.critere}>Tarifs : </Text>
                                <Text style={styles.text}>{this.state.user.price}€/jour</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit} onPress={() => redirection()}>
                                <Text style={styles.submit}>Voir profil</Text>
                            </TouchableOpacity>
                        </View>
                    </>}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width
    },
    wrapper: {
        margin: 'auto',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 20,
        width: '90%',
    },
    bloc: {
        backgroundColor: '#FFF6E3',
        borderRadius: 5,
        padding: 18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
        position: 'relative'
    },
    blocIcon: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-evenly',
    },
    img: {
        width: 72,
        height: 72,
        position: 'absolute',
        marginTop: -50,
        borderRadius: 500,
    },
    blocAvis: {
        backgroundColor: '#000',
        borderRadius: 5,
    },
    textAvis: {
        color: '#FFF',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    identity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%',
        marginBottom: 15,
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '50%',
        marginBottom: 25,
    },
    pricing: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    city: {
        marginLeft: 7,
    },
    critere: {
        fontWeight: '500',
    },
    text: {
        textAlign: 'center',
    },
    containerSubmit: {
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 20,
        width: '60%',
        backgroundColor: '#CEEAF0',
    },
    submit: {
        fontSize: 16,
    },
});
