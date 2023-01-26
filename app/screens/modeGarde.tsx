import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Dimensions } from "react-native";
import RadioButton from '../components/radioButton';
import IconDownload from '../assets/moduleSVG/downloadSVG'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*TODO requete pour ajouter les infos du professionnel sur le mode de garde + voir sur l'upload de fichier
+ voir pour scroll vertical https://reactscript.com/fullscreen-scrollview/ ? */

export default class CreationCompteParticulier extends Component {
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Quel type d'animal gardez-vous?</Text>

                    <View style={styles.blocRadio}>
                        <RadioButton data={this.typeChoice} onSelect={undefined} />
                    </View>

                    <Text style={styles.text}>Gabari accepté:</Text>
                    <FlatList
                        horizontal={true}
                        data={this.poids}
                        renderItem={({ item }) => <TouchableOpacity activeOpacity={0.5} style={[{backgroundColor: item.bg}, styles.listItem]}><Text style={styles.gabarit}>{item.gabarit}</Text><Text style={styles.poids}> {item.tranche}</Text></TouchableOpacity>}
                        keyExtractor={item => item.gabarit}
                    />

                    <Text style={[styles.text, styles.marge]}>Photos du lieu de garde proposé:</Text>
                    <View style={styles.gallery}>
                        <Text style={styles.textGallery}>Importer depuis la Galerie</Text>
                        <IconDownload></IconDownload>
                    </View>

                    <TextInput
                        multiline={true}
                        numberOfLines={7}
                        style={styles.description}
                        placeholder="Saisissez une description afin d’en savoir plus sur les conditions de la garde">
                    </TextInput>

                    <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit}>
                        <Text style={styles.submit}>Mettre à jour</Text>
                    </TouchableOpacity>
                </View>
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
        width: width
    },
    wrapper: {
        width: '90%',
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
        margin: 'auto',
        width: '50%',
    },
    gallery: {
        borderColor: '#FAD4D4',
        borderWidth: 3,
        borderStyle: 'dashed',
        marginBottom: 30,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    textGallery: {
        marginBottom: 15,
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
    },
    containerSubmit: {
        minHeight: 50,
        backgroundColor: '#FAD4D4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 30,
        width: '100%',
    },
    submit: {
        fontSize: 16,
    },
});