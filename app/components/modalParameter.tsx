import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


/*TODO Clique sur deconnexion appel fct deconnexion, clique sur modifier profil redirige sur le bon lien selon role utilisateur */

class ModalParameter extends Component {
    state = {
        modalVisible: true,
    };

    async deconnexion() {
        await AsyncStorage.clear()
        
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setState({ modalVisible: !modalVisible });
                    }}>
                    <View style={styles.modal}>
                        <View style={styles.modal}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setState({ modalVisible: !modalVisible })}>
                                <Text style={styles.textStyle}>X</Text>
                            </Pressable>

                            <TouchableOpacity style={styles.profil}><Text>Modifier mon profil</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.deconnexion}><Text>Déconnexion</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

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

export default ModalParameter;