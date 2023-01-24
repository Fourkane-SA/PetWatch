import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList } from 'react-native';
import RadioButton from '../components/RadioButton';

export default class AddAnimal extends Component {

  booleanChoiceAllergie = [
    { 
      id: 'yAllergie',
      value: 'Oui'
     },
    { 
      id: 'nAllergie',
      value: 'Non'
     },
  ];

  
  booleanChoiceMaladie = [
    { 
      id: 'yMaladie',
      value: 'Oui'
     },
    { 
      id: 'nMaladie',
      value: 'Non'
     },
  ];

  booleanChoiceMedicament = [
    { 
      id: 'yMedicament',
      value: 'Oui'
     },
    { 
      id: 'nMedicament',
      value: 'Non'
     },
  ];

  genderChoice = [
    { 
      id: 'maleGender',
      value: 'Mâle'
    },
    { 
      id: 'femelleGender',
      value: 'Femelle'
    },
  ];

  typeChoice = [
    { 
      id: 'chienType',
      value: 'Chien'
    },
    { 
      id: 'chatType',
      value: 'Chat'
    },
  ];

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

  state = {
    etape: 1
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.etape < 5 &&
          <Text style={styles.pageTitle}> Ajoutez votre animal {this.state.etape}/4</Text>
        }

        {this.state.etape == 1 &&
          <View style={styles.etape}>
            <View style={styles.bloc}>
              <TextInput placeholder='Nom animal' style={styles.btnInput}></TextInput>
            </View>

            {/* Faire les boutons radio dans un nouveau composant */}
            <View style={styles.blocRadio}>
              <RadioButton data={this.genderChoice} onSelect={undefined} />
              <RadioButton data={this.typeChoice} onSelect={undefined} />
            </View>

            <View style={styles.bloc}>
              <View style={[styles.calendar, styles.bg]}>
                <TextInput value='Date de naissance' style={styles.btnCalendar}></TextInput>
                <TouchableOpacity activeOpacity={0.5}>
                  <Image style={{ width: 15, height: 15 }} source={require('../assets/calendar.svg')} />
                </TouchableOpacity>
              </View>

              <View style={[styles.calendar, styles.bg]}>
                <TextInput value="Date d'adoption" style={styles.btnCalendar}></TextInput>
                <TouchableOpacity activeOpacity={0.5}>
                  <Image style={{ width: 15, height: 15 }} source={require('../assets/calendar.svg')} />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={styles.subtitle}>Votre animal est :</Text>
              <FlatList
                horizontal={true}
                data={this.poids}
                renderItem={({ item }) => <View><Text>{item.gabarit}</Text><Text> {item.tranche}</Text></View>}
                keyExtractor={item => item.gabarit}
              />
            </View>

            {/* ici un selecteur multiple pour cocher les vaccins */}
            <View style={styles.selVaccin}>
              <Text>Vaccins</Text>
            </View>
          </View>
        }

        {this.state.etape == 2 &&
          <View style={styles.etape}>
            <Text>Est-ce que votre animal a des allergies et/ou intolérances alimentaires?</Text>
            <RadioButton data={this.genderChoice} onSelect={undefined} />
            <Text>Si oui, à quoi?</Text>
            <TextInput></TextInput>
            <Text>Est-ce que votre animal a des problèmes de santé?</Text>
            <RadioButton data={this.genderChoice} onSelect={undefined} />
            <Text>Si oui, lesquels?</Text>
            <TextInput></TextInput>
          </View>
        }

        {this.state.etape == 3 &&
          <View style={styles.etape}>
            <Text>Est-ce que votre animal a des médicaments à consommer?</Text>
            <RadioButton data={this.genderChoice} onSelect={undefined} />
            <Text>Si oui, lesquels et à quelle fréquence?</Text>
            <TextInput></TextInput>
            <Text>Veuillez indiquer la date de la dernière consultation vétérinaire de votre animal.</Text>
            <TextInput value="Date d'adoption" style={styles.btnCalendar}></TextInput>
            <TouchableOpacity activeOpacity={0.5}>
              <Image style={{ width: 15, height: 15 }} source={require('../assets/calendar.svg')} />
            </TouchableOpacity>

            <Text>Vous pouvez saisir une description générale de votre fidèle compagnon/compagnonne :)</Text>
            <TextInput multiline={true} numberOfLines={5}></TextInput>
          </View>
        }

        {this.state.etape == 4 &&
          <View style={styles.etape}>
            <Text>Chargez des photos de votre animal</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Text>Importer depuis la Galerie</Text>
              <Image style={{ width: 15, height: 15 }} source={require('../assets/download.svg')} />
            </TouchableOpacity>
          </View>
        }

        {this.state.etape == 5 &&
          <View style={styles.etape}>
            <Text>Vous avez ajouté votre animal!</Text>
          </View>
        }

        <View style={styles.footer}>
          {this.state.etape == 5 &&
            <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]} onPress={() => this.setState({ etape: 1 })}>
              <Text>Ajouter un autre animal</Text>
            </TouchableOpacity>
          }
          {this.state.etape > 1 && this.state.etape < 5 &&
            <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]} onPress={() => this.setState({ etape: this.state.etape - 1 })}>
              <Text>Revenir en arrière</Text>
            </TouchableOpacity>
          }

          {this.state.etape < 4 &&
            <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]} onPress={() => this.setState({ etape: this.state.etape + 1 })}>
              <Text>Continuer {this.state.etape}/4</Text>
            </TouchableOpacity>
          }

          {this.state.etape == 4 &&
            <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]} onPress={() => this.setState({ etape: this.state.etape + 1 })}>
              <Text>Ajouter mon animal {this.state.etape}/4</Text>
            </TouchableOpacity>
          }


          {this.state.etape == 5 &&
            <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]} >
              <Text>Accueil</Text>
            </TouchableOpacity>
          }
        </View>
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
  etape: {
    alignItems: 'center',
  },
  bloc: {
    alignItems: 'center',
    marginBottom: 40,
  },
  pageTitle: {
    fontSize: 26,
    margin: 45
  },
  btnInput: {
    backgroundColor: '#ddd',
    padding: 8,
    paddingLeft: 20,
    width: 250,
    minHeight: 50
  },
  btnCalendar: {
    backgroundColor: '#ddd',
    padding: 8,
    paddingLeft: 20,
    width: 240,
    minHeight: 50
  },
  calendar: {
    flexDirection: 'row',
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
  subtitle: {
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 30,
  },
  selVaccin: {
    marginBottom: 30
  },
  footer: {

  },
  btnFooter: {
    marginBottom: 10,
    padding: 8,
    paddingLeft: 20,
    width: 250,
    textAlign: 'center',
  }
});