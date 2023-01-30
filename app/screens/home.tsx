import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import IconCalendar from '../assets/moduleSVG/calendarSVG'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

/* TODO vrai calendrier */

export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.wrapper}>
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