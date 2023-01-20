import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity, ListViewBase, FlatList} from 'react-native';

export default  class AddAnimal extends Component {
    poids = [
        {
          gabarit: 'Petit',
          tranche: '0-7 kg',
        },
        {
            gabarit: 'Moyen',
            tranche: '7 - 18 kg',
        },
        {
            gabarit: 'Grand',
            tranche: '18 - 45 kg',
        },
        {
            gabarit: 'Géant',
            tranche: '45+ kg',
        },
      ];

    etape = 1;
    titleText="Ajoutez votre animal " + this.etape + "/4";

    incrementeEtape() {
        return this.etape += 1;
    }

  render() {
    return (    
    <SafeAreaView style={styles.container}>
        <View style={styles.etape1}>
            <View style={styles.bloc}>
                <Text style={styles.pageTitle}> {this.titleText}</Text> 
                <TextInput placeholder='Nom animal' style={styles.btnInput}></TextInput>
            </View>

            {/* Faire les boutons radio dans un nouveau composant  */}
            <View style={styles.blocRadio}>
                <View style={styles.blocRadioGroup}>
                    <Text style={styles.txtRadio}> Mâle</Text> 
                    <Text style={styles.txtRadio}> Femelle</Text> 
                </View>
                <View style={styles.blocRadioGroup}>
                    <Text style={styles.txtRadio}> Chien</Text> 
                    <Text style={styles.txtRadio}> Chat</Text>
                </View>
            </View>

            <View style={styles.bloc}>
                <View style={[styles.calendar, styles.bg]}> { /*multiple styles */}
                    <TextInput value='Date de naissance' style={styles.btnCalendar}></TextInput>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={{ width : 15, height:15}} source={require('../assets/calendar.svg')}/>
                    </TouchableOpacity>
                </View>

                <View style={[styles.calendar, styles.bg]}>
                    <TextInput value="Date d'adoption" style={styles.btnCalendar}></TextInput>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={{ width : 15, height:15}} source={require('../assets/calendar.svg')}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.subtitle}>Votre animal est :</Text>
                <FlatList
                    horizontal={true}
                    data={this.poids}
                    renderItem={({item}) => <View> <Text>{item.gabarit}</Text><Text> {item.tranche}</Text></View>}
                    keyExtractor={item => item.gabarit}
                />
            </View>

            {/* ici un selecteur pour cocher les vaccins */}
            <View style={styles.selVaccin}></View>

            <View style={styles.footer}>
                <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]}>
                    Revenir en arrière
                </TouchableOpacity>
                
                <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]}>
                    Continuer {this.etape}/4
                </TouchableOpacity>
            </View>


        </View>
        <View style={styles.etape2}></View>
        <View style={styles.etape3}></View>
        <View style={styles.etape4}></View>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  etape1 : {
    alignItems: 'center',
  },
  etape2: {

  }, 
  etape3: {

  },
  etape4: {

  },
  bloc: {
    alignItems : 'center',
    marginBottom : 40,
  },
  pageTitle: {
    fontSize: 26,
    margin: 45
  },
  btnInput: {
    backgroundColor: '#ddd',
    padding: 8,
    paddingLeft : 20,
    width: 250,
    minHeight: 50
  },
  btnCalendar: {
    backgroundColor: '#ddd',
    padding: 8,
    paddingLeft : 20,
    width: 240,
    minHeight: 50
  },
  calendar: {
    flexDirection : 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingRight: 8,
    minHeight: 50,
  }, 
  bg: {
    backgroundColor: '#ddd',
  },
  txtRadio: {
    fontSize: 16,
  },
  blocRadio: {
    width: 250,
  },
  blocRadioGroup: {
    flexDirection: 'row',
    justifyContent : 'space-between',
    marginBottom: 40,
  },
  subtitle: {
    textAlign: 'center',
    fontWeight : '700',
    marginBottom : 30,
  },
  selVaccin: {
    marginBottom: 30
  },
  footer: {
    
  },
  btnFooter: {
    marginBottom : 10,
    padding: 8,
    paddingLeft : 20,
    width: 250,
    textAlign: 'center',
  }
});