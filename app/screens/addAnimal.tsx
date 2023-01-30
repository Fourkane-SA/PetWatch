import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import RadioButton from '../components/radioButton';
import { Dimensions } from "react-native";
// import Calendar from '../components/calendar'
import Svg, { Path } from 'react-native-svg';
import MultipleSelect from '../components/multipleSelect';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

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
      bg: '#FFF6E3',
    },
    {
      gabarit: 'Moyen',
      tranche: '7-18 kg',
      bg: '#D9FFCB',
    },
    {
      gabarit: 'Grand',
      tranche: '18-45 kg',
      bg: '#CEEAF0',
    },
    {
      gabarit: 'Géant',
      tranche: '45+ kg',
      bg: '#FAD4D4',
    },
  ]

  state = {
    etape: 1
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View contentContainerStyle= {styles.wrapper}>
          {this.state.etape < 5 &&
            <Text style={styles.pageTitle}> Ajoutez votre animal {this.state.etape}/4</Text>
          }

          {this.state.etape == 1 &&
            <View style={styles.etape}>
              <View style={styles.blocName}>
                <TextInput value='Nom animal' style={styles.btnInput}></TextInput>
              </View>

              <View style={styles.blocRadio}>
                <RadioButton data={this.genderChoice} onSelect={undefined} />
                <RadioButton data={this.typeChoice} onSelect={undefined} />
              </View>

              <View style={styles.blocCalendar}>
                <View style={[styles.calendar]}>
                  <TouchableOpacity activeOpacity={0.5} style={styles.calendarContainer}>
                    <Text style={styles.btnCalendar}>Date de naissance</Text>
                    <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <Path d="M16 18H2V7H16M13 0V2H5V0H3V2H2C0.89 2 0 2.89 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 2.89 17.1 2 16 2H15V0M14 11H9V16H14V11Z" fill="black" />
                    </Svg>
                  </TouchableOpacity>
                  {/* <Calendar></Calendar> */}
                </View>

                <View style={[styles.calendar]}>
                  <TouchableOpacity activeOpacity={0.5} style={styles.calendarContainer}>
                    <Text style={styles.btnCalendar}>Date d'adoption</Text>
                    <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <Path d="M16 18H2V7H16M13 0V2H5V0H3V2H2C0.89 2 0 2.89 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 2.89 17.1 2 16 2H15V0M14 11H9V16H14V11Z" fill="black" />
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.blocAnimal}>
                <Text style={styles.subtitle}>Votre animal est :</Text>
                <FlatList
                  horizontal={true}
                  data={this.poids}
                  renderItem={({ item }) => <View style={[{ backgroundColor: item.bg }, styles.listItem]}><Text>{item.gabarit}</Text><Text> {item.tranche}</Text></View>}
                  keyExtractor={item => item.gabarit}
                />
              </View>

              {/* ici un selecteur multiple pour cocher les vaccins */}
              <View style={styles.selVaccin}>
                <Text style={styles.subtitle}>Indiquez les vaccins reçus par votre animal :</Text>
                <MultipleSelect></MultipleSelect>
                <TextInput style={[styles.btnInput, styles.btnVaccin]} placeholder="Autres vaccins"></TextInput>
              </View>
            </View>
          }

          {this.state.etape == 2 &&
            <View style={styles.etape}>
              <Text style={styles.question}>Est-ce que votre animal a des allergies et/ou intolérances alimentaires?</Text>
              <RadioButton data={this.genderChoice} onSelect={undefined} />
              <Text style={styles.question}>Si oui, à quoi?</Text>
              <TextInput></TextInput>
              <Text style={styles.question}>Est-ce que votre animal a des problèmes de santé?</Text>
              <RadioButton data={this.genderChoice} onSelect={undefined} />
              <Text style={styles.question}>Si oui, lesquels?</Text>
              <TextInput></TextInput>
            </View>
          }

          {this.state.etape == 3 &&
            <View style={styles.etape}>
              <Text style={styles.question}>Est-ce que votre animal a des médicaments à consommer?</Text>
              <RadioButton data={this.genderChoice} onSelect={undefined} />
              <Text style={styles.question}>Si oui, lesquels et à quelle fréquence?</Text>
              <TextInput></TextInput>
              <Text style={styles.question}>Veuillez indiquer la date de la dernière consultation vétérinaire de votre animal.</Text>
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
              <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.retour]} onPress={() => this.setState({ etape: this.state.etape - 1 })}>
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
    width: width
  },
  wrapper: {
    width: '90%',
    alignItems: 'center',
  },
  etape: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  item : {
    width: '100%',
  },

  pageTitle: {
    fontSize: 26,
    marginTop: 60,
    width: '100%',
    textAlign: 'center',
  },

  blocName: {
    marginTop: 15,
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  blocCalendar: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  blocAnimal: {
    alignItems: 'center',
    marginBottom: 50,
    width: '100%',
  },

  btnInput: {
    backgroundColor: '#FFF6E3',
    padding: 8,
    minHeight: 50,
    width: '100%',
    borderRadius: 5,
  },

  btnCalendar: {
    backgroundColor: '#FFF6E3',
    paddingLeft: 20,
    width: '85%',
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

  bg: {
    backgroundColor: '#CEEAF0',
  },

  txtRadio: {
    fontSize: 16,
  },

  blocRadio: {
    width: '100%',
  },

  subtitle: {
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 25,
  },

  list: {
    textAlign: 'center'
  },

  listItem: {
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 5,
    minWidth: 70,
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },


  selVaccin: {
    marginBottom: 30,
    width: '100%',
  },

  btnVaccin: {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
  },

  footer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnFooter: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    textAlign: 'center',
    width: '100%',
    borderRadius: 5
  },
  retour: {
    borderWidth: 2,
    borderColor: '#000',
  }
});