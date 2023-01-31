import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native';
import { Dimensions } from "react-native";
import IconCalendar from '../assets/moduleSVG/calendarSVG'
import IconParameter from '../assets/moduleSVG/parametresSVG'
import Calendar from '../components/calendar'

import ModalParameter from '../components/modalParameter'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

/* TODO vrai calendrier */

export default function Home({ navigation }) {

    const [parameter, setParameter] = React.useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.wrapper}>
                <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => setParameter(parameter + 1)}>
                    <IconParameter></IconParameter>
                </TouchableOpacity>
                <Text style={styles.title}>Trouver un hébergement pour mon animal</Text>

                <Text style={styles.instructions}>Choisissez les dates pour lesquelles vous souhaitez faire garder votre animal</Text>
                <View style={styles.blocCalendar}>
                    <View style={[styles.calendar]}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.calendarContainer}>
                            <Text style={styles.btnCalendar}>Date de fin</Text>
                            <IconCalendar></IconCalendar>
                        </TouchableOpacity>
                        {/* <Calendar></Calendar> */}
                    </View>

                    <View style={[styles.calendar]}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.calendarContainer}>
                            <Text style={styles.btnCalendar}>Date de début</Text>
                            <IconCalendar></IconCalendar>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity={0.5} style={styles.btnFooter}>
                        <Text>Rechercher</Text>
                    </TouchableOpacity>
                </View>

                { parameter == 1 && 
                    <ModalParameter></ModalParameter>
                }
            </ScrollView>
        </SafeAreaView>
    );
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
        position: 'relative',
    },
    abs: {
        position: 'absolute',
        top: 35,
        right: 8,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 100,
    },
    instructions: {
        fontSize: 16,
        marginBottom: 30,
    },
    blocCalendar: {
        alignItems: 'center',
        width: '100%',
    },
    btnCalendar: {
        backgroundColor: '#FFF6E3',
        paddingLeft: 20,
        width: '100%',
    },

    calendar: {
        alignItems: 'flex-start',
        marginBottom: 20,
        paddingRight: 8,
        width: '100%',
        backgroundColor: '#FFF6E3',
        borderRadius: 5,
    },

    calendarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        minHeight: 50,
        backgroundColor: '#FFF6E3',
    },
    btnFooter: {
        marginBottom: 10,
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 50,
        textAlign: 'center',
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#CEEAF0',
    },
});