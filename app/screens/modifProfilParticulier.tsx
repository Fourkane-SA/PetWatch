import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Dimensions } from "react-native";
import React, { Component } from "react";
import axios from "axios/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

import IconModif from '../assets/moduleSVG/iconModif'
import { User } from '../models/User';
import Upload from '../components/Upload';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

/*TODO Code A modifier pour faire une modification de profil + value par defaut dans les input sont infos du compte */

class Props {
    navigation
}

export default class ModifProfilParticulier extends Component<Props> {

    // const [nom, setNom] = React.useState()
    // const [prenom, setPrenom] = React.useState()
    // const [mail, setMail] = React.useState()
    // const [numero, setNumero] = React.useState()
    // const [adresse, setAdresse] = React.useState()
    // const [ville, setVille] = React.useState()
    // const [codePostal, setCodePostal] = React.useState()
    // const [messageErreur, setMessageErreur] = React.useState()

    async componentDidMount() {

        const userID = (await axios.get('/tokens')).data;
        this.setState({ userID: userID });

       // console.log(userID);

        const user: User = (await axios.get('/users/' + this.state.userID)).data;
        this.setState({ user: user });
        //console.log(user);
        this.setState({ lastname: user.lastname });
        this.setState({ firstname: user.firstname });
        this.setState({ phoneNumber: user.phoneNumber });
        this.setState({ email: user.email });
        this.setState({ address: user.address });
        this.setState({ city: user.city });
        this.setState({ postalCode: user.postalCode });
        this.setState({ profilImage: user.profilImage });
    }

    async setUser() {
        if (this.state.password != "") {
            try {
                (await axios.patch('/users/' + this.state.userID, {
                    lastname: this.state.lastname,
                    fistname: this.state.firstname,
                    phoneNumber: this.state.phoneNumber,
                    address: this.state.address,
                    city: this.state.city,
                    postalCode: this.state.postalCode,
                    profilImage: this.state.profilImage,
                    password: this.state.password,

                })).data
            } catch (e) {
                console.log("erreur")
            }

            this.props.navigation.navigate("Home");
        }
        else if (this.state.lastname != this.state.user.lastname ||
            this.state.firstname != this.state.user.firstname ||
            this.state.phoneNumber != this.state.user.phoneNumber ||
            this.state.address != this.state.user.address ||
            this.state.city != this.state.user.city ||
            this.state.postalCode != this.state.user.postalCode ||
            this.state.profilImage != this.state.user.profilImage) {
            try {
                (await axios.patch('/users/' + this.state.userID, {
                    lastname: this.state.lastname,
                    firstname: this.state.firstname,
                    phoneNumber: this.state.phoneNumber,
                    address: this.state.address,
                    city: this.state.city,
                    postalCode: this.state.postalCode,
                    profilImage: this.state.profilImage,
                })).data
            } catch (e) {
                console.log("erreur")
            }

            this.props.navigation.navigate("Home");
        }
    }

    state = {
        etape: 1,
        userID: null,
        user: null,
        lastname: "",
        firstname: "",
        phoneNumber: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        profilImage: "",
        password: "",
        showUpload: false,
    }

    render() {
        return (
            <ScrollView>
                <KeyboardAwareScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.blocModification}>
                        <View style={styles.blocAvatar}>
                            {this.state.profilImage != null &&
                                <Image style={[styles.img]} source={{ uri: this.state.profilImage }} />
                            }
                            {this.state.profilImage == null &&
                                <Image style={[styles.img]} source={require('../assets/photo-profil.png')} />
                            }
                            <View style={[styles.icon, { left: (Dimensions.get('window').width * 0.9) / 2 + 15 }]}>
                                <TouchableOpacity activeOpacity={.7} onPress={() => this.setState({ showUpload: !this.state.showUpload })}>
                                    <IconModif width="30" height="30" ></IconModif>
                                </TouchableOpacity>
                            </View>

                            {this.state.showUpload == true &&

                                <Upload onImageUrlChange={(imageUrl) => this.setState({ profilImage: imageUrl })}></Upload>

                            }
                        </View>

                        <View>
                            <TextInput placeholder="Nom" value={this.state.lastname} onChangeText={(res) => this.setState({ lastname: res })} style={[styles.champ, styles.identity]} ></TextInput>
                            <TextInput placeholder="Prénom" value={this.state.firstname} onChangeText={(res) => this.setState({ firstname: res })} style={[styles.champ, styles.identity]}></TextInput>
                            <Text style={[styles.champ, styles.identity]}> {this.state.email}</Text>
                            <TextInput placeholder="Numéro de téléphone" value={this.state.phoneNumber} onChangeText={(res) => this.setState({ phoneNumber: res })} style={[styles.champ, styles.identity]}></TextInput>
                        </View>

                        <View>
                            <TextInput placeholder="Adresse" value={this.state.address} onChangeText={(res) => this.setState({ address: res })} style={[styles.champ, styles.adresse]}></TextInput>
                            <TextInput placeholder="Ville" value={this.state.city} onChangeText={(res) => this.setState({ city: res })} style={[styles.champ, styles.adresse]}></TextInput>
                            <TextInput placeholder="Code postal" value={this.state.postalCode} onChangeText={(res) => this.setState({ postalCode: res })} style={[styles.champ, styles.adresse]}></TextInput>
                        </View>

                        <View>
                            <TextInput placeholder="Nouveau mot de passe" value={this.state.password} onChangeText={(res) => this.setState({ password: res })} style={[styles.champ, styles.mdp]} secureTextEntry={true}></TextInput>
                        </View>

                        <TouchableOpacity activeOpacity={0.8} style={[styles.champ, styles.containerSubmit]} onPress={() => this.setUser()}>
                            <Text style={styles.submit}>Mettre à jour</Text>
                        </TouchableOpacity>

                    </View>
                    </SafeAreaView>
                    </KeyboardAwareScrollView>
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
    blocModification: {
        width: '90%',
    },
    blocAvatar: {
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 50,
        position: 'relative',
    },
    title: {
        fontSize: 46,
        fontWeight: '700',
        marginTop: 65,
        marginBottom: 45,
        alignItems: 'center',
    },
    champ: {
        minHeight: 50,
        fontSize: 16,
        marginBottom: 18,
        borderRadius: 5,
        paddingLeft: 20,
        textAlignVertical: "center",
    },
    img: {
        width: 72,
        height: 72,
        borderRadius: 500,
    },
    icon: {
        position: 'absolute',
        bottom: -10,
        left: '50%',
    },
    containerSubmit: {
        minHeight: 50,
        backgroundColor: '#CEEAF0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 30,
    },
    submit: {
        fontSize: 16,
    },
    identity: {
        backgroundColor: '#FFF6E3'
    },
    adresse: {
        backgroundColor: '#D9FFCB',
    },
    mdp: {
        backgroundColor: '#FAD4D4',
    },
    erreur: {
        textAlign: "center",
        marginTop: 10,
        color: 'red',
        fontSize: 16
    },
});
