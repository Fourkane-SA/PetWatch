import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import IconCalendar from '../assets/moduleSVG/calendarSVG'
import CardResultatRecherche from '../components/cardResultatRech'
import Filter from '../components/filter'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function ResultatRecherche() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={[{ width: width }, {minHeight: height}]}>
                <CardResultatRecherche></CardResultatRecherche>
                <View style={styles.absolute}>
                    <Filter></Filter>
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
        width: width,
        minHeight: height,
    },
    absolute: {
        position: 'absolute',
        left: '95%',
        bottom:'5%',
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