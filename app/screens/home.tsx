import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native';
import { Dimensions } from "react-native";
import IconCalendar from '../assets/moduleSVG/calendarSVG'
import IconParameter from '../assets/moduleSVG/parametresSVG'
import Calendar from '../components/calendarmulti'

import ModalParameter from '../components/modalParameter'
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

/* TODO vrai calendrier */

export default function Home({ navigation }) {

    const [parameter, setParameter] = React.useState(false);
    const [calendar, setCalendar] = React.useState(false);
    const [dates, setDates] = React.useState([]);

    const pull_dates = (dates) => {
        console.log(dates);
        setDates(dates);
    }
    const Tab = createBottomTabNavigator();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.wrapper}>
                {/*Ici le btn a integrer sur une page pour avoir accès aux parametres */}
                <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => setParameter(true)} onPressOut={() => setParameter(false)}>
                    <IconParameter></IconParameter>
                </TouchableOpacity>
                <Text style={styles.title}>Trouver un hébergement pour mon animal</Text>

                <Text style={styles.instructions}>Choisissez les dates pour lesquelles vous souhaitez faire garder votre animal</Text>
                <View style={styles.blocCalendar}>
                    <View style={[styles.calendar]}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.calendarContainer} onPress={() => setCalendar(!calendar)}>
                            {dates[1] == null &&
                                <><Text style={styles.btnCalendar}>Date de début </Text><IconCalendar></IconCalendar></>
                            }
                            {dates[1] != '' &&
                                <><Text style={[styles.btnCalendar2]}>{dates[1]}</Text><IconCalendar></IconCalendar></>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.calendar]}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.calendarContainer} onPress={() => setCalendar(!calendar)}>
                            {dates[2] == null &&
                                <><Text style={styles.btnCalendar}>Date de fin </Text><IconCalendar></IconCalendar></>
                            }
                            {dates[2] != '' &&
                                <><Text style={styles.btnCalendar2}>{dates[2]}</Text><IconCalendar></IconCalendar></>
                            }
                        </TouchableOpacity>
                    </View>

                    {calendar == true &&
                        <Calendar func={pull_dates}></Calendar>
                    }
                </View>

                <TouchableOpacity activeOpacity={0.5} style={[styles.containerSubmit, {width: (Dimensions.get('window').width *0.9) } ]} onPress= {() => navigation.navigate('ResultatsRecherche')}>
                    <Text style={styles.submit}>Rechercher</Text>
                </TouchableOpacity>

                {parameter == true &&
                    <ModalParameter navigation={navigation}  onVisibleChange={(change) => {
                        setParameter(change)
                    }}></ModalParameter>
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
        width: width*0.9,
        alignItems: 'center',
        position: 'relative',
    },
    abs: {
         position: 'absolute',
        top: 60,
        right: '-7%',
        width: 50,
        height: 50,
        zIndex: 5,
        backgroundColor: 'transparent'
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
        textAlign: 'left',
        width: '80%',
    },
    btnCalendar2: {
        width: '80%',
        paddingLeft: 20,
    },
    calendar: {
        alignItems: 'flex-start',
        marginBottom: 20,
        paddingRight: 8,
        backgroundColor: '#FFF6E3',
        borderRadius: 5,
    },

    calendarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start",
        minHeight: 50,
        width: width *0.9,
        backgroundColor: '#FFF6E3',
        borderRadius: 5,
    },
    containerSubmit: {
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#CEEAF0',
        width: '100%',
    },
    submit: {
        fontSize: 16,
    },
});
