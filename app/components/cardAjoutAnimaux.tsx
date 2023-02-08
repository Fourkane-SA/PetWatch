import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import IconChien from '../assets/moduleSVG/chienSVG'
import IconMale from '../assets/moduleSVG/maleSVG'
import {Pet} from "../models/Pet";
import axios from "axios/index";
import FemelleSVG from "../assets/moduleSVG/iconFemelle";
import ChatSVG from "../assets/moduleSVG/chatSVG";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*Ici passage de parametre par rapport a la page checkReservation car selon l'animal le background change de couleur et egalement l'icon !!!!! */


class Props {
    label
    lien
    navigation
    id
    selected
}



export default class CardAjoutAnimaux extends Component<Props> {

    async componentDidMount() {
        const pet: Pet = (await axios.get('/pets/' + this.props.id)).data
        this.setState({pet: pet})
        this.setState({photos: JSON.parse(pet.photoUrl)})
    }

    state = {
        pet: null,
        photos: []
    }

    render() {
        const doSomething = () => {
            if (this.props.label != 'Ajouter') {
                this.props.navigation.navigate(this.props.lien,{id: this.props.id});
            } else {
                // Ajout d'un animal a la reservation
                return;
            }
        }


    const styleBloc = this.props.selected ?  [styles.wrapper, styles.blocSelected] : [styles.wrapper, styles.bloc]


        return (
            <View style={styleBloc}>
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
                        {this.state.pet !== null && <Image style={styles.image} source={{uri: this.state.photos[0]}}></Image>}
                    </View>

                {this.props.label != '' && <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit} onPress= {() => doSomething()}>
                    <Text style={styles.submit}>{this.props.label}</Text>
                </TouchableOpacity>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: width * 0.9,
        alignItems: 'center',
    },
    bloc: {
        backgroundColor: '#FFF6E3',
        borderRadius: 5,
        padding: 18,
        marginBottom: 15
    },
    blocSelected: {
        backgroundColor: '#D9FFCB',
        borderRadius: 5,
        padding: 18,
        marginBottom: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10
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
    image: {
        minHeight: 150,
        height: 'auto',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    containerSubmit: {
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: '100%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    submit: {
        fontSize: 16,
    }
});
