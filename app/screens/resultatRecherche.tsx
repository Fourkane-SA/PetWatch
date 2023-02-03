import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import IconCalendar from '../assets/moduleSVG/calendarSVG'
import CardResultatRecherche from '../components/cardResultatRech'
import Filter from '../components/filter'
import IconParameter from '../assets/moduleSVG/parametresSVG'
import ModalParameter from '../components/modalParameter';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function ResultatRecherche({ navigation }) {
    const [parameter, setParameter] = React.useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={[{ width: width }, { minHeight: height }, {paddingTop: 30}]}>
                <TouchableOpacity activeOpacity={.7} style={styles.abs} onPress={() => setParameter(true)} onPressOut={() => setParameter(false)}>
                    <IconParameter></IconParameter>
                </TouchableOpacity>
                <CardResultatRecherche navigation={navigation}  ></CardResultatRecherche>
                <View style={styles.absolute}>
                    <Filter></Filter>
                </View>

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
        width: width,
        minHeight: height,
    },
    absolute: {
        position: 'absolute',
        marginRight: '5%',
        right: 0,
        bottom: '15%',
    },
    abs: {
        position: 'absolute',
        top: 30,
        right: '5%',
    },
});
