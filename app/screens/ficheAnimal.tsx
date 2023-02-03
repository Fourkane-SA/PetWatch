import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { Dimensions } from "react-native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'
import IconMale from '../assets/moduleSVG/maleSVG'
import IconModif from '../assets/moduleSVG/iconModif';
import IconParameter from '../assets/moduleSVG/parametresSVG'
import axios from "axios/index";
import {Pet} from "../models/Pet";
import FemelleSVG from "../assets/moduleSVG/iconFemelle";
import ChatSVG from "../assets/moduleSVG/chatSVG";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*Ici passage de parametre par rapport a la page checkReservation car selon l'animal le background change de couleur et egalement l'icon !!!!! */
type Props = {
    id
}

export default class FicheAnimal extends Component<Props> {

    state = {
        parameter: false,
        pet: null,
        url: []
    }

    async componentDidMount() {
        const res = (await axios.get('/pets/' + this.props.route.params.id)).data
        this.setState({pet: res})
        this.setState({url: JSON.parse(this.state.pet.photoUrl)})
        console.log(this.state.pet)
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => this.setState({parameter: true})} onPressOut={() => this.setState({parameter: false})}>
                        <IconParameter></IconParameter>
                    </TouchableOpacity>
                    <View style={[styles.wrapper, styles.bloc]}>
                        <View style={styles.header}>
                            {this.state.pet !== null && <Text style={styles.title}>{this.state.pet.name}</Text>}

                            <View style={styles.blocIcon}>
                                {this.state.pet !== null && this.state.pet.gender === 'Mâle' && <IconMale></IconMale>}
                                {this.state.pet !== null && this.state.pet.gender === 'Femelle' && <FemelleSVG></FemelleSVG>}
                                {this.state.pet !== null && this.state.pet.type === 'Chien' && <IconChien></IconChien>}
                                {this.state.pet !== null && this.state.pet.type === 'Chat' && <ChatSVG></ChatSVG>}
                            </View>
                        </View>

                        <View style={styles.infos}>
                            {this.state.pet !== null && <Image style={styles.image} source={{uri: this.state.url[0]}}></Image>}
                            <View style={styles.infosbloc}>
                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Date de naissance :</Text>
                                    {this.state.pet !== null && <Text style={styles.reponse}>{this.state.pet.birth}</Text>}

                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Date d'adoption :</Text>
                                    {this.state.pet !== null && <Text style={styles.reponse}>{this.state.pet.adoptionDate}</Text>}
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Gabarit et poids :</Text>
                                    {this.state.pet !== null && <Text style={styles.reponse}>{this.state.pet.weight}</Text>}
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Allergies :</Text>
                                    {this.state.pet !== null && <Text style={styles.reponse}>{this.state.pet.allergies || 'Aucun'}</Text>}
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Vaccins :</Text>
                                    {this.state.pet !== null && <Text style={styles.reponse}>{this.state.pet.vaccines}</Text>}
                                </View>

                                <View style={styles.blocCritere}>
                                    <Text style={styles.critere}>Dernière consultation :</Text>
                                    {this.state.pet !== null && <Text style={styles.reponse}>{this.state.pet.dateLastVeterinaryConsultation}</Text>}
                                </View>

                                <View style={styles.iconModif}>
                                    <TouchableOpacity activeOpacity={.7} onPress={() => this.props.navigation.navigate('AddAnimal', {title : "Modifier votre animal" , word:"Modifier", word2:"modifié"})}>
                                        <IconModif width="50" height="50"></IconModif>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}

/*export default function FicheAnimal({ navigation }, id) {
    const [parameter, setParameter] = React.useState(false);
    const [pet, setPet] = React.useState(null);

    async function initValues() {
        console.log(id)
        if(pet === null) {
            const res = (await axios.get('/pets/' + id)).data
            setPet(res)
            console.log(pet)
        }
    }
    initValues()
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => setParameter(true)} onPressOut={() => setParameter(false)}>
                    <IconParameter></IconParameter>
                </TouchableOpacity>
                <View style={[styles.wrapper, styles.bloc]}>
                    <View style={styles.header}>
                        {pet !== null && <Text style={styles.title}>{pet.name}</Text>}

                        <View style={styles.blocIcon}>
                            <IconMale></IconMale>
                            <IconChien></IconChien>
                        </View>
                    </View>

                    <View style={styles.infos}>
                        <Image style={styles.image} source={require('../assets/photoChien.png')}></Image>
                        <View style={styles.infosbloc}>
                            <View style={styles.blocCritere}>
                                <Text style={styles.critere}>Date de naissance :</Text>
                                <Text style={styles.reponse}>17/09/2018</Text>
                            </View>

                            <View style={styles.blocCritere}>
                                <Text style={styles.critere}>Date d'adoption :</Text>
                                <Text style={styles.reponse}>17/12/2018</Text>
                            </View>

                            <View style={styles.blocCritere}>
                                <Text style={styles.critere}>Gabarit et poids :</Text>
                                <Text style={styles.reponse}>Grand, 18-45kg</Text>
                            </View>

                            <View style={styles.blocCritere}>
                                <Text style={styles.critere}>Allergies :</Text>
                                <Text style={styles.reponse}>Saumon</Text>
                            </View>

                            <View style={styles.blocCritere}>
                                <Text style={styles.critere}>Vaccins :</Text>
                                <Text style={styles.reponse}>Liste des vaccins</Text>
                            </View>

                            <View style={styles.blocCritere}>
                                <Text style={styles.critere}>Dernière consultation :</Text>
                                <Text style={styles.reponse}>6/12/2012</Text>
                            </View>

                            <View style={styles.iconModif}>
                                <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('AddAnimal', {title : "Modifier votre animal" , word:"Modifier", word2:"modifié"})}>
                                    <IconModif width="50" height="50"></IconModif>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}*/

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
        minHeight: 150,
        height: 'auto',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    blocCritere: {
        flexDirection: 'row',
        marginBottom: 15,
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
    iconModif: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 51,
        height: 51,
    },
    abs: {
        position: 'absolute',
        top: 30,
        right: '5%',
    },

});
