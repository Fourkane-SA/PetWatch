import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import RadioButton from '../components/radioButton';
import IconDownload from '../assets/moduleSVG/downloadSVG'
import Upload from '../components/Upload';
import axios from "axios/index";
import { User } from '../models/User';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*TODO requete pour ajouter les infos du professionnel sur le mode de garde + voir sur l'upload de fichier
+ voir pour scroll vertical https://reactscript.com/fullscreen-scrollview/ ? */

export default class ModeGarde extends Component {
    typeChoice = [
        {
            id: 'chienType',
            value: 'Chien'
        },
        {
            id: 'chatType',
            value: 'Chat'
        },
    ];

    poids = [
        {
            gabarit: 'Petit',
            tranche: '0-7 kg',
            bg: '#FFF6E3',
        },
        {
            gabarit: 'Moyen',
            tranche: '7-18 kg',
            bg: '#D9FFCB',
        },
        {
            gabarit: 'Grand',
            tranche: '18-45 kg',
            bg: '#CEEAF0',
        },
        {
            gabarit: 'Géant',
            tranche: '45+ kg',
            bg: '#FAD4D4',
        },
    ]

    state = {
        keepCat: false,
        keepDogs: false,
        gabarit: [],
        prix: '',
        url: [],
        description: ''
    }

    async submit() {
        if(this.state.description === '' || this.state.url.length === 0 || this.state.prix == '' || this.state.gabarit.length === 0){
            console.log('Tous les champs ne sont pas remplis')
        } else {
            const userId = (await axios.get('/tokens')).data
            try {
                await axios.patch('/users/' + userId, {
                    keepCats: this.state.keepCat,
                    keepDogs: this.state.keepDogs,
                    acceptedWeight: JSON.stringify(this.state.gabarit),
                    description: this.state.description,
                    imageLocation: JSON.stringify(this.state.url),
                    price: this.state.prix
                })
                this.props.navigation.navigate('Home')
            }
            catch (e) {
                console.log(e.response)
            }
        }

    }


    updateGabarit(gabarit: string) {
        let newGabarit = this.state.gabarit
        if(this.state.gabarit.includes(gabarit)) {
            const index = newGabarit.indexOf(gabarit)
            newGabarit.splice(index, 1)
            this.setState({gabarit: newGabarit})
        } else {
            newGabarit.push(gabarit)
            this.setState({gabarit: newGabarit})
        }
    }

    addImage(url: string) {
        const newUrl = this.state.url.slice()
        newUrl.push(url)
        this.setState({url: newUrl})
    }

    async componentDidMount() {
        const userId = (await axios.get('/tokens')).data
        const user: User = (await axios.get('/users/' + userId)).data
        if(user.acceptedWeight === null)
            user.acceptedWeight = "[]"
        if(user.imageLocation === null)
            user.imageLocation = "[]"
        this.setState({
            keepCat: user.keepCats,
            keepDogs: user.keepDogs,
            gabarit: JSON.parse(user.acceptedWeight),
            prix: user.price,
            url: JSON.parse(user.imageLocation),
            description: user.description
        })
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>Quel type d'animal gardez-vous?</Text>

                        <View style={styles.blocRadio}>
                            <TouchableOpacity activeOpacity={0.5} style={[styles.btnCheckbox]} onPress= { () => this.setState({keepCat: !this.state.keepCat}) }><View style={[styles.before, this.state.keepCat ? styles.beforeSelected : styles.beforeUnselected]} >
                                <View style={[styles.after, this.state.keepCat ? styles.afterSelected : styles.afterUnselected]}></View>
                            </View><Text style={styles.checkbox}>{this.typeChoice[0].value}</Text></TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} style={[styles.btnCheckbox]} onPress= { () => this.setState({keepDogs: !this.state.keepDogs}) }><View style={[styles.before, this.state.keepDogs ? styles.beforeSelected : styles.beforeUnselected]} >
                                <View style={[styles.after, this.state.keepDogs ? styles.afterSelected : styles.afterUnselected]}></View>
                            </View><Text style={styles.checkbox}>{this.typeChoice[1].value}</Text></TouchableOpacity>
                        </View>

                        <Text style={styles.text}>Gabarits acceptés ({this.state.gabarit.length} choisi(s)):</Text>
                        <Text style={styles.text}>{JSON.stringify(this.state.gabarit).split("[").join('').split("]").join('').split('"').join('').split(',').join(', ')}</Text>
                        <FlatList
                            horizontal={true}
                            data={this.poids}
                            renderItem={({ item }) => <TouchableOpacity activeOpacity={0.5} style={[{ backgroundColor: item.bg }, styles.listItem]} onPress={() => this.updateGabarit(item.gabarit)}><Text style={styles.gabarit}>{item.gabarit}</Text><Text style={styles.poids}> {item.tranche}</Text></TouchableOpacity>}
                            keyExtractor={item => item.gabarit}
                        />

                        <Text style={[styles.text, styles.marge]}>Prix par jour : </Text>
                        <TextInput style={styles.input} placeholder="Indiquez votre prix" value={this.state.prix} onChangeText={res => this.setState({prix: res})}></TextInput>

                        <Text style={[styles.text, styles.marge]}>Photos du lieu de garde proposé:</Text>
                        <Upload onImageUrlChange={(imageUrl) => this.addImage(imageUrl)} />
                        <Text style={styles.text} key={this.state.url.length}>{this.state.url.length} images ajoutés</Text>

                        <TextInput
                            multiline={true}
                            numberOfLines={7}
                            style={styles.description}
                            placeholder="Saisissez une description afin d’en savoir plus sur les conditions de la garde"
                            value={this.state.description}
                            onChangeText={res => this.setState({description: res})}>
                        </TextInput>

                        <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit} onPress={() => this.submit()}>
                            <Text style={styles.submit}>Mettre à jour</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width
    },
    wrapper: {
        width: width*0.9,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        marginTop: 65,
        marginBottom: 45,
        textAlign: 'center',
    },
    text: {
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 35,
    },
    marge: {
        marginTop: 35,
    },
    blocRadio: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 'auto',
        width: '50%',
    },
    input: {
        minHeight: 50,
        borderRadius: 5,
        backgroundColor: '#CEEAF0',
        width: '100%',
        paddingLeft: 20,
    },
    listItem: {
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 5,
        minWidth: 70,
        minHeight: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gabarit: {
        fontWeight: '700',
        fontSize: 16,
    },
    poids: {
        fontSize: 16,
    },
    description: {
        borderRadius: 5,
        backgroundColor: '#FFF6E3',
        width: '100%',
        paddingLeft: 20,
    },
    containerSubmit: {
        minHeight: 50,
        backgroundColor: '#CEEAF0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 30,
        width: '100%',
    },
    submit: {
        fontSize: 16,
    },
    checkbox: {
        marginLeft: 5,
    },
    btnCheckbox: {
        flexDirection: 'row',
    },
    before: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        width: 18,
        height: 18,
        borderRadius: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    after: {
        width: 10,
        height: 10,
        backgroundColor: '#bbb',
        borderRadius: 2,
    },
    beforeSelected: {
        borderColor: '#FAD4D4'
    },
    beforeUnselected: {
        borderColor: '#bbb',
    },
    afterSelected: {
        backgroundColor: '#FAD4D4',
    },
    afterUnselected: {
        backgroundColor: '#bbb',
    },
});
