import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import RadioButton from '../components/radioButton';
import IconDownload from '../assets/moduleSVG/downloadSVG'
import Upload from '../components/Upload';

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
        url1: '',
        choix1: false,
        choix2: false,
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>Quel type d'animal gardez-vous?</Text>

                        <View style={styles.blocRadio}>
                            <TouchableOpacity activeOpacity={0.5} style={[styles.btnCheckbox]} onPress= { () => this.setState({choix1: !this.state.choix1}) }><View style={[styles.before, this.state.choix1 ? styles.beforeSelected : styles.beforeUnselected]} >
                                <View style={[styles.after, this.state.choix1 ? styles.afterSelected : styles.afterUnselected]}></View>
                            </View><Text style={styles.checkbox}>{this.typeChoice[0].value}</Text></TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} style={[styles.btnCheckbox]} onPress= { () => this.setState({choix2: !this.state.choix2}) }><View style={[styles.before, this.state.choix2 ? styles.beforeSelected : styles.beforeUnselected]} >
                                <View style={[styles.after, this.state.choix2 ? styles.afterSelected : styles.afterUnselected]}></View>
                            </View><Text style={styles.checkbox}>{this.typeChoice[1].value}</Text></TouchableOpacity>
                        </View>

                        <Text style={styles.text}>Gabaris acceptés (0 choisi(s)):</Text>
                        <FlatList
                            horizontal={true}
                            data={this.poids}
                            renderItem={({ item }) => <TouchableOpacity activeOpacity={0.5} style={[{ backgroundColor: item.bg }, styles.listItem]}><Text style={styles.gabarit}>{item.gabarit}</Text><Text style={styles.poids}> {item.tranche}</Text></TouchableOpacity>}
                            keyExtractor={item => item.gabarit}
                        />

                        <Text style={[styles.text, styles.marge]}>Prix par jour : </Text>
                        <TextInput style={styles.input}></TextInput>

                        <Text style={[styles.text, styles.marge]}>Photos du lieu de garde proposé:</Text>
                        <Upload onImageUrlChange={(imageUrl) => { this.setState({ url1: imageUrl }) }} />

                        <TextInput
                            multiline={true}
                            numberOfLines={7}
                            style={styles.description}
                            placeholder="Saisissez une description afin d’en savoir plus sur les conditions de la garde">
                        </TextInput>

                        <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit} onPress={() => this.props.navigation.navigate('Home')}>
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
