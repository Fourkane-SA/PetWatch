import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Dimensions } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {users} from "../models/user";
import axios from "axios/index";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*TODO Clique sur deconnexion appel fct deconnexion, clique sur modifier profil redirige sur le bon lien selon role utilisateur */
class Props {
    navigation
    onVisibleChange
}

export default class ModalParameter extends Component<Props> {
    state = {
        modalVisible: true,
    }

    render() {

        const deconnexion = async () =>  {
            await AsyncStorage.clear()
            this.setState({modalVisible: false}, () => {
                this.props.onVisibleChange(false)
            })
            this.props.navigation.navigate('ChoixConexionInscription')
        }

        const editProfil = async () => {
            this.setState({modalVisible: false}, () => {
                this.props.onVisibleChange(false)
            })
            const userId = (await axios.get('/tokens')).data
            const user : users = (await axios.get('/users/' + userId)).data
            if(user.isCompany)
                this.props.navigation.navigate('ModifProfilPro')
            else
                this.props.navigation.navigate('ModifProfilParticulier')
        }

        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({modalVisible: false}, () => {
                            this.props.onVisibleChange(false)
                        })
                    }}>
                    <View style={styles.modal}>
                        <View style={styles.modal}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setState({modalVisible: false}, () => {
                                        this.props.onVisibleChange(false)})}>
                                <Text style={styles.textStyle}>X</Text>
                            </Pressable>

                            <TouchableOpacity style={styles.profil} onPress={() => editProfil()}><Text>Modifier mon profil</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.deconnexion} onPress={() => deconnexion()}><Text>Déconnexion</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}


/*export default function ModalParameter({navigation}, {visible}) {


    const [modalVisible, setVisible] = React.useState(true)

    async function deconnexion() {
        await AsyncStorage.clear()
        setVisible(false)
        navigation.navigate('ChoixConexionInscription')
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setVisible(false)
                }}>
                <View style={styles.modal}>
                    <View style={styles.modal}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setVisible(false)}>
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>

                        <TouchableOpacity style={styles.profil}><Text>Modifier mon profil</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.deconnexion} onPress={() => deconnexion()}><Text>Déconnexion</Text></TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
*/



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modal: {
        width: width,
        minHeight: height,
        margin: 'auto',
        padding: 20,
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 50,
        alignSelf: 'flex-end',
        marginRight: '5%',
    },
    buttonClose: {
        backgroundColor: '#CEEAF0',
        marginBottom: 30,
    },
    textStyle: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    profil: {
        minHeight: 50,
        backgroundColor: '#FFF6E3',
        borderRadius: 5,
        marginRight: '5%',
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        marginBottom: 30,
    },
    deconnexion: {
        minHeight: 50,
        backgroundColor: '#FAD4D4',
        borderRadius: 5,
        marginRight: '5%',
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        marginBottom: 30,
    },
});
