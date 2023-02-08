import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, ScrollView, Touchable } from 'react-native';
import { Dimensions } from "react-native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'
import IconPro from '../assets/moduleSVG/iconPro'
import Calendar from '../components/calendarmulti'
import IconParticulier from '../assets/moduleSVG/iconParticulier'
import IconMarker from '../assets/moduleSVG/iconMarker'
import IconStarFilled from '../assets/moduleSVG/starFilled'
import CardAjoutAnimaux from '../components/cardAjoutAnimaux';
import IconParameter from '../assets/moduleSVG/parametresSVG'
import axios from 'axios';
import { Pet } from '../models/Pet';
import ModalParameter from '../components/modalParameter';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


type Props = {
    navigation
    id
    dates
}

export default class ChoixAnimauxResa extends Component<Props> {

    state = {
        pets: [],
        selectedPets: [],
        petsNameSelected: [],
        parameter: false

    }

    addPets(id) {
        let select = this.state.selectedPets
        let names = this.state.petsNameSelected
        if(select.includes(id)) {
            const index = select.indexOf(id)
            select.splice(index, 1)
            names.splice(index, 1)
            this.setState({selectedPets: select})
            this.setState({petsNameSelected: names})
        } else {
            select.push(id)
            const name = this.state.pets.find(p => p.id === id).name
            names.push(name)
            this.setState({
                selectedPets: select,
                petsNameSelected: names
            })
        }
    }

    async componentDidMount() {
        const userId = (await axios.get('/tokens')).data
        const pets: Pet[] = (await axios.get('/pets/byUserId/' + userId)).data
        this.setState({
            pets: pets,
            petsName: pets.map(pet => pet.name)
        })
    }

    async confirmer() {
        if(this.state.selectedPets.length > 0) {
            try {
                await axios.post('/reservations', {
                    userIdPro: this.props.route.params.id,
                    start: this.props.route.params.dates[1],
                    end: this.props.route.params.dates[2],
                    idPets: this.state.selectedPets
                })
                this.props.navigation.navigate('MesDemandes')
            }
            catch(e) {
                console.log(e.response)
            }
        } else {
            console.log('Aucun animal selectionnée')
        }
        //this.props.navigation.navigate('MesDemandes')}
    }

    render() {
        return (

            <ScrollView>
             <SafeAreaView style={styles.container}>
                 <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => this.setState({parameter: false})} onPressOut={() => this.setState({parameter: false})}>
                     <IconParameter></IconParameter>
                 </TouchableOpacity> 
                 <View style={[styles.wrapper]}>
                     <FlatList 
                         data={this.state.pets}
                         renderItem={({item}) => 
                             <TouchableOpacity style={{width: width*0.9}} onPress={() => this.addPets(item.id)} key={item.id + this.state.selectedPets.includes(item.id)}>
                                 <CardAjoutAnimaux selected={this.state.selectedPets.includes(item.id)} label="" lien="" navigation={this.props.navigation} id={item.id} ></CardAjoutAnimaux>
                             </TouchableOpacity>}


                     ></FlatList>
                     {this.state.petsNameSelected.length > 0 && <Text>Vous avez choisi {this.state.petsNameSelected.toString().replaceAll(',', ', ')}</Text>}
                     {this.state.petsNameSelected.length === 0 && <Text>Vous n'avez choisi aucun animal</Text>}
                    
                     <TouchableOpacity activeOpacity={0.8} style={[styles.containerSubmit]} onPress={() => this.confirmer()}>
                         <Text style={styles.submit}>Confirmer</Text>
                     </TouchableOpacity>
                 </View>
                 {this.state.parameter == true &&
                    <ModalParameter navigation={this.props.navigation} onVisibleChange={(change) => {
                        this.setState({parameter: change});
                    } }></ModalParameter>}
             </SafeAreaView>
             </ScrollView>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        minHeight: height,
    },
    wrapper: {
        margin: 'auto',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 20,
        width: '90%',
        //maxHeight: '80%'
    },
    bloc: {
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
        marginBottom: 40,
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
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 25,
        width: '100%',
        backgroundColor: '#CEEAF0',
    },
    submit: {
        fontSize: 16,
    },
    abs: {
        position: 'absolute',
        top: 30,
        right: 0,
        width: 50,
        height: 50,
        zIndex: 5,
        backgroundColor:'transparent'
    },
});