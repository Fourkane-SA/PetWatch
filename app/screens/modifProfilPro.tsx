import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Dimensions } from "react-native";
import React, { Component } from "react";
import axios from "axios/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModeGarde from './modeGarde'
import { User } from "../models/User";

import IconModif from '../assets/moduleSVG/iconModif2'
import Upload from '../components/Upload';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*TODO Code A modifier pour faire une modification de profil + value par defaut dans les input sont infos du compte */

class Props {
    navigation
}

export default class ModifProfilPro extends Component<Props> {
    async componentDidMount() {

        const userID = (await axios.get('/tokens')).data;
        this.setState({ userID: userID });

        console.log(userID);

        const user: User = (await axios.get('/users/' + this.state.userID)).data;
        this.setState({ user: user });
        this.setState({ companyName: user.companyName });
        this.setState({ siretNumber: user.siretNumber });
        this.setState({ website: user.website });
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
                    companyName: this.state.companyName,
                    siretNumber: this.state.siretNumber,
                    website: this.state.website,
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

            this.props.navigation.navigate("ModeGarde");
        } else if (this.state.companyName != this.state.user.companyName ||
            this.state.siretNumber != this.state.user.siretNumber ||
            this.state.website != this.state.user.website ||
            this.state.phoneNumber != this.state.user.phoneNumber ||
            this.state.address != this.state.user.address ||
            this.state.city != this.state.user.city ||
            this.state.postalCode != this.state.user.postalCode ||
            this.state.profilImage != this.state.user.profilImage) {
            try {
                (await axios.patch('/users/' + this.state.userID, {
                    companyName: this.state.companyName,
                    siretNumber: this.state.siretNumber,
                    website: this.state.website,
                    phoneNumber: this.state.phoneNumber,
                    address: this.state.address,
                    city: this.state.city,
                    postalCode: this.state.postalCode,
                    profilImage: this.state.profilImage
                })).data
            } catch (e) {
                console.log("erreur")
            }

            this.props.navigation.navigate("ModeGarde");
        }
    }

    state = {
        etape: 1,
        userID: null,
        user: null,
        companyName: "",
        siretNumber: "",
        website: "",
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
                <SafeAreaView style={styles.container}>
                    {this.state.etape == 1 &&
                        <View style={styles.blocModification}>
                            <View style={styles.blocAvatar}>
                                {this.state.profilImage != null &&
                                    <Image style={[styles.img]} source={{ uri: this.state.profilImage }} />
                                }
                                {this.state.profilImage == null &&
                                    <Image style={[styles.img]} source={require('../assets/photo-profil.png')} />
                                }
                                <View style={[styles.icon, { left: (Dimensions.get('window').width * 0.9) / 2 + 15 }]}>
                                    <TouchableOpacity style={[styles.modif]} activeOpacity={.7} onPress={() => this.setState({ showUpload: !this.state.showUpload })}>
                                        <IconModif></IconModif>
                                    </TouchableOpacity>
                                </View>

                                {this.state.showUpload == true &&

                                    <Upload onImageUrlChange={(imageUrl) => this.setState({ profilImage: imageUrl })}></Upload>
                                }
                            </View>

                            {this.state.user != null &&
                                <>
                                    <View>
                                        <TextInput placeholder="Nom" value={this.state.companyName} onChangeText={(res) => this.setState({ companyName: res })} style={[styles.champ, styles.identity]}></TextInput>
                                        <TextInput placeholder="Numéro de SIRET" value={this.state.siretNumber} onChangeText={(res) => this.setState({ siretNumber: res })} style={[styles.champ, , styles.identity]}></TextInput>
                                        <TextInput placeholder="Site web" value={this.state.website} onChangeText={(res) => this.setState({ website: res })} style={[styles.champ, , styles.identity]}></TextInput>
                                        <TextInput placeholder="Téléphone professionnel" value={this.state.phoneNumber} onChangeText={(res) => this.setState({ phoneNumber: res })} style={[styles.champ, , styles.identity]}></TextInput>
                                        <Text style={[styles.champ, styles.identity]}>{this.state.email}</Text>
                                    </View>
                                    <View>
                                        <TextInput placeholder="Adresse" value={this.state.address} onChangeText={(res) => this.setState({ address: res })} style={[styles.champ, styles.adresse]}></TextInput>
                                        <TextInput placeholder="Ville" value={this.state.city} onChangeText={(res) => this.setState({ city: res, })} style={[styles.champ, styles.adresse]}></TextInput>
                                        <TextInput placeholder="Code postal" value={this.state.postalCode} onChangeText={(res) => this.setState({ postalCode: res, })} style={[styles.champ, styles.adresse]}></TextInput>
                                    </View>

                                    <View>
                                        <TextInput placeholder="Nouveau mot de passe" value={this.state.password} onChangeText={(res) => this.setState({ password: res })} style={[styles.champ, styles.mdp]} secureTextEntry={true}></TextInput>
                                    </View>

                                    <TouchableOpacity activeOpacity={0.8} style={[styles.champ, styles.containerSubmit]} onPress={() => this.setUser()}>
                                        <Text style={styles.submit}>Continuer {this.state.etape}/2</Text>
                                    </TouchableOpacity></>

                            }
                        </View>

                    }
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
        width: width,
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
        textAlignVertical: 'center',
    },
    img: {
        width: 72,
        height: 72,
        borderRadius: 500,
    },
    modif: {
        backgroundColor:  '#FAD4D4',
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    icon: {
        position: 'absolute',
        top: 50,
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
