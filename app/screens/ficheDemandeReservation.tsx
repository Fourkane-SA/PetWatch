import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Dimensions } from "react-native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'
import IconMale from '../assets/moduleSVG/maleSVG'
import { Pet } from '../models/Pet';
import axios from 'axios';
import { Reservation } from '../models/Reservation';
import FemelleSVG from '../assets/moduleSVG/iconFemelle';
import ChatSVG from '../assets/moduleSVG/chatSVG';
import { User } from '../models/User';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*Ici passage de parametre par rapport a la page checkReservation car selon l'animal le background change de couleur et egalement l'icon !!!!! */

type Props = {
    route
    navigation
}

export default class FicheDemandeReservation extends Component<Props> {
    
    state = {
        choix: 0,
        id: -1,
        reservation: null,
        pet: null,
        proprietaire: null,
        refuseReasons: ''
    }

    async componentDidMount() {
        const id = this.props.route.params.id
        this.setState({id: id})
        const reservation : Reservation = (await axios.get('/reservations/' + id)).data
        const pet: Pet = (await axios.get('/pets/' + reservation.idPets[0])).data
        const proprietaire: User = (await axios.get('/users/' + reservation.userIdClient)).data
        let choix = 0
        if(reservation.status === 'Acceptée')
            choix = 1
        else if(reservation.status === 'Refusé')
            choix = 2
        this.setState({
            id: id,
            reservation: reservation,
            pet: pet,
            proprietaire: proprietaire,
            choix: choix,
            refuseReasons: reservation.refuseReasons
        })
    }

    async accept() {
        const reservation = (await (axios.patch('/reservations/accept/' + this.props.route.params.id))).data
        this.setState({
            reservation: reservation,
            choix: 1
        })
    }

    async refuse() {
        if(this.state.choix == 0) {
            this.setState({
                choix: 2
            })
            const reservation = (await (axios.patch('/reservations/refuse/' + this.props.route.params.id))).data
        } else if(this.state.choix === 2) {
            await axios.patch('/reservations/refuse/' + this.props.route.params.id, {
                refuseReasons: this.state.refuseReasons
            })
            this.props.navigation.navigate('MesReservations')
        }
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>
            {this.state.pet !== null && <>
                {this.state.choix == 0 &&
                    <View style={[styles.wrapper, styles.bloc]}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{this.state.pet.name}</Text>

                            <View style={styles.blocIcon}>
                                {this.state.pet.gender === 'Mâle' && <IconMale></IconMale>}
                                {this.state.pet.gender === 'Femelle' && <FemelleSVG></FemelleSVG>}
                                {this.state.pet.type === 'Chien' && <IconChien></IconChien>}
                                {this.state.pet.type === 'Chat' && <ChatSVG></ChatSVG>}
                            </View>
                        </View>

                        <View style={styles.infos}>
                            <Image style={styles.image} source={{uri: JSON.parse(this.state.pet.photoUrl)[0] }}></Image>
                            <View style={styles.infosbloc}>
                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Date de naissance :</Text>
                                    <Text style={styles.reponse}>{this.state.pet.birth}</Text>
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Gabarit et poids :</Text>
                                    <Text style={styles.reponse}>{this.state.pet.weight} (poids TODO)</Text>
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Allergies :</Text>
                                    <Text style={styles.reponse}>{this.state.pet.allergies || 'Aucun'}</Text>
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Vaccins :</Text>
                                    <Text style={styles.reponse}>{this.state.pet.vaccines || 'Aucun'}</Text>
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Propriétaire :</Text>
                                    <Text style={styles.reponse}>{this.state.proprietaire.firstname + ' ' + this.state.proprietaire.lastname}</Text>
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Adresse</Text>
                                    <Text style={styles.reponse}>{this.state.proprietaire.address}, {this.state.proprietaire.postalCode} {this.state.proprietaire.city}</Text>
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Date de réservation : </Text>
                                    <Text style={styles.reponse}>du {this.state.reservation.start} au {this.state.reservation.end}</Text>
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Contact : </Text>
                                    <Text style={styles.reponse}>{this.state.proprietaire.phoneNumber}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.blocBtn}>
                            <TouchableOpacity activeOpacity={0.8} style={[styles.containerSubmit, styles.refuse]}
                                onPress={() => this.refuse()}>
                                <Text style={styles.submit}>Refuser</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={[styles.containerSubmit, styles.confirm]}
                                onPress={() => this.accept()}>
                                <Text style={styles.submit}>Accepter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                {this.state.choix == 1 &&
                    <><View style={[styles.wrapper, styles.bloc]}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{this.state.pet.name}</Text>

                            <View style={styles.blocIcon}>
                                {this.state.pet.gender === 'Mâle' && <IconMale></IconMale>}
                                {this.state.pet.gender === 'Femelle' && <FemelleSVG></FemelleSVG>}
                                {this.state.pet.type === 'Chien' && <IconChien></IconChien>}
                                {this.state.pet.type === 'Chat' && <ChatSVG></ChatSVG>}
                            </View>
                        </View>

                        <View style={styles.infos}>
                            <Image style={styles.image} source={{uri: JSON.parse(this.state.pet.photoUrl)[0] }}></Image>
                        </View>
                    </View>
                        <View style={styles.wrapper2}>
                            <View style={styles.containerConfirmText}>
                                <Text style={styles.confirmText}>Vous avez accepté la demande !</Text>
                            </View>
                            <Text style={styles.tip}>N’hésitez pas à contacter le particulier pour vous mettre au point !</Text>

                            <TouchableOpacity activeOpacity={0.8} style={[styles.containerSubmit, styles.confirm]}
                                onPress={() => this.props.navigation.navigate('MesReservations')}>
                                <Text style={styles.submit}>Retour à “Mes demandes”</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }

                {this.state.choix == 2 &&
                    <><View style={[styles.wrapper, styles.bloc]}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{this.state.pet.name}</Text>

                            <View style={styles.blocIcon}>
                                {this.state.pet.gender === 'Mâle' && <IconMale></IconMale>}
                                {this.state.pet.gender === 'Femelle' && <FemelleSVG></FemelleSVG>}
                                {this.state.pet.type === 'Chien' && <IconChien></IconChien>}
                                {this.state.pet.type === 'Chat' && <ChatSVG></ChatSVG>}
                            </View>
                        </View>

                        <View style={styles.infos}>
                            <Image style={styles.image} source={{uri: JSON.parse(this.state.pet.photoUrl)[0] }}></Image>
                        </View>
                    </View>
                        <View style={styles.wrapper2}>
                            <View style={styles.containerRefuseText}>
                                <Text style={styles.refuseText}>Vous avez refusé la demande</Text>
                            </View>
                            <TextInput style={styles.motif} multiline={true} numberOfLines={7} value={this.state.refuseReasons} onChangeText={(res) => this.setState({refuseReasons: res})}
                                placeholder="Expliquer brièvement les raisons du refus: date, type d’animal..."></TextInput>

                            <TouchableOpacity activeOpacity={0.8} style={[styles.containerSubmit, styles.confirm]}
                                onPress={() => this.refuse()}>
                                <Text style={styles.submit}>Retour à “Mes demandes”</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </>}
        </SafeAreaView>
    );
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        minHeight: height,
    },
    wrapper: {
        width: '90%',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 20,
    },
    wrapper2: {
        width: '90%',
        alignItems: 'center',
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
        marginBottom: 20
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    blocIcon: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infos: {
        width: '100%',
    },
    infosbloc: {
        marginTop: 30,
    },
    image: {
        minHeight: 80,
        height: 'auto',
        width: '50%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    blocCritere: {
        flexDirection: 'row',
        marginBottom: 10,
        flexWrap: 'wrap',
    },
    critere: {
        fontWeight: '700',
        fontSize: 16,
    },
    reponse: {
        fontSize: 16,
        marginLeft: 5,
    },
    blocBtn: {
        marginTop: 30,
        width: '100%',
    },
    containerSubmit: {
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '100%',
        marginTop: 10,
    },
    confirm: {
        backgroundColor: '#CEEAF0',
    },
    refuse: {
        backgroundColor: '#FAD4D4',
    },
    submit: {
        fontSize: 16,
    },
    containerConfirmText: {
        marginTop: 30,
        backgroundColor: '#D9FFCB',
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '100%',
    },
    confirmText: {
        fontSize: 16
    },
    tip: {
        fontSize: 16,
        fontWeight: '700',
        width: '100%',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    containerRefuseText: {
        marginTop: 30,
        backgroundColor: '#FAD4D4',
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '100%',
    },
    refuseText: {
        fontSize: 16
    },
    motif: {
        backgroundColor: '#FFF6E3',
        marginTop: 50,
        marginBottom: 50,
        padding: 10,
    }

});
