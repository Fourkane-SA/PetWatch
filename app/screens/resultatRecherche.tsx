import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import IconCalendar from '../assets/moduleSVG/calendarSVG'
import CardResultatRecherche from '../components/cardResultatRech'
import Filter from '../components/filter'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function ResultatRecherche({navigation}) {

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
        marginRight: '5%',
        right: 0,
        bottom:'15%',
    },
});