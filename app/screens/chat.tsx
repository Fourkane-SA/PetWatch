import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, ScrollView } from 'react-native';
import { Dimensions } from "react-native";

import IconChien from '../assets/moduleSVG/chienSVG'
import IconChat from '../assets/moduleSVG/chatSVG'
import IconPro from '../assets/moduleSVG/iconPro'
import IconParticulier from '../assets/moduleSVG/iconParticulier'
import IconMarker from '../assets/moduleSVG/iconMarker'
import IconStarFilled from '../assets/moduleSVG/starFilled'
import Message from '../components/message';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function FenetreChat({ navigation, route }) {

    
    const [message, setMessage] = React.useState('')

    const[listMessage, setListMessage] = React.useState([])
    const[idUser, setIdUser] = React.useState(-1)
    
    let userId = 0
    async function initMessages() {
        userId = (await axios.get('/tokens')).data
        const messages = (await axios.get('/messages/' + route.params.id)).data
        setListMessage(messages)
        await new Promise(r => setTimeout(r, 2000));
        
    }

    async function initIdUser() {
        const id = (await axios.get('/tokens')).data
        setIdUser(id)
    }

    if(idUser === -1)
        initIdUser()

    initMessages()

    async function sendMessage() {
        userId = (await axios.get('/tokens')).data
        try {
            await axios.post('/messages', {
                idConversation: route.params.id,
                idSender: userId,
                message: message
            })
            setMessage('')
        } catch(e) {
            //console.log(e.response)
        }
        
    }



    return (
        <ScrollView>
            <KeyboardAwareScrollView>
            <SafeAreaView style={styles.container}>
                <View style={[styles.wrapper]}>
                    <FlatList data={listMessage} renderItem={({ item }) => <View style={{width: '100%'}}><Message message={item.message} isMe={item.idSender === idUser} idSender={item.idSender} ></Message></View>}></FlatList>
                    
                    
                    <View style={styles.wrapper}>
                        <TextInput style={styles.chatInput} placeholder='...' value={message} onChangeText={(res) => setMessage(res)}></TextInput>
                        
                        <TouchableOpacity activeOpacity={0.8} style={styles.containerSubmit} onPress= {() => sendMessage() }>
                            <Text style={styles.submit}>Envoyer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </SafeAreaView>
            </KeyboardAwareScrollView>
        </ScrollView>
    );
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
    },
    btnFooter: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 20,
    },
    containerSubmit: {
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 20,
        width: '40%',
        backgroundColor: '#CEEAF0',
    },
    submit: {
        fontSize: 16,
    },
    chatInput: {
        width: '100%',
        borderStyle: "solid",
        borderWidth: 2,
        padding: 10
    }
});
