import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Dimensions } from "react-native";
import IconCalendar from '../assets/moduleSVG/calendarSVG'
import CardResultatRecherche from '../components/cardResultatRech'
import Filter from '../components/filter'
import IconParameter from '../assets/moduleSVG/parametresSVG'
import ModalParameter from '../components/modalParameter';
import axios from "axios/index";
import { User } from "../models/User";
import CardAjoutAnimaux from "../components/cardAjoutAnimaux";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function ResultatRecherche({ navigation }) {
    const [parameter, setParameter] = React.useState(false);
    const [users, setUsers] = React.useState([])

    async function initSearch() {
        let list: User[] = (await axios.get('/users')).data
        list = list.slice()
            .filter(user => user.isCompany)
            .filter(user => user.description !== null)
        await new Promise(r => setTimeout(r, 2000));
        setUsers(list)
    }

    
    initSearch()
    

    return (
        <>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => setParameter(true)} onPressOut={() => setParameter(false)}>
                        <IconParameter></IconParameter>
                    </TouchableOpacity>

                    <FlatList data={users} renderItem={({ item }) => <CardResultatRecherche navigation={navigation} id={item.id}></CardResultatRecherche>}></FlatList>


                    {parameter == true &&
                        <ModalParameter navigation={navigation} onVisibleChange={(change) => {
                            setParameter(change);
                        }}></ModalParameter>}
                </SafeAreaView>
            </ScrollView>
            <View style={styles.absolute}>
                <Filter></Filter>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        minHeight: height,
        paddingTop: 30,
    },
    absolute: {
        position: 'absolute',
        marginRight: '5%',
        right: 0,
        bottom: '5%',
    },
    abs: {
        position: 'absolute',
        top: 30,
        right: 0,
        width: 50,
        height: 50,
        zIndex: 5,
        backgroundColor: 'transparent'
    },
});
