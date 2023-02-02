import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import RadioButton from '../components/radioButton';
import { Dimensions } from "react-native";
import Calendar from '../components/calendarsimple'
import Calendar2 from '../components/calendarsimple'
import Calendar3 from '../components/calendarsimple'
import IconCalendar from '../assets/moduleSVG/calendarSVG'
import MultipleSelect from '../components/multipleSelect';
import Upload from '../components/Upload';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function AddAnimal({navigation}) {

  const booleanChoiceAllergie = [
    {
      id: 'yAllergie',
      value: 'Oui'
    },
    {
      id: 'nAllergie',
      value: 'Non'
    },
  ];

  const booleanChoiceMaladie = [
    {
      id: 'yMaladie',
      value: 'Oui'
    },
    {
      id: 'nMaladie',
      value: 'Non'
    },
  ];

  const booleanChoiceMedicament = [
    {
      id: 'yMedicament',
      value: 'Oui'
    },
    {
      id: 'nMedicament',
      value: 'Non'
    },
  ];

  const genderChoice = [
    {
      id: 'maleGender',
      value: 'Mâle'
    },
    {
      id: 'femelleGender',
      value: 'Femelle'
    },
  ];

  const typeChoice = [
    {
      id: 'chienType',
      value: 'Chien'
    },
    {
      id: 'chatType',
      value: 'Chat'
    },
  ];

  const poids = [
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

  const [etape, setEtape] = React.useState(1);
  const [url, setUrl] = React.useState([]);
  const [affNaiss, setAffNaiss] = React.useState(false);
  const [affAdopt, setAdopt] = React.useState(false);
  const [affVet, setAffVet] = React.useState(false);
  const [dateNaiss, setDateNaiss] = React.useState('');
  const [dateAdoption, setDateAdoption] = React.useState('');
  const [dateVeterinaire, setDateVeterinaire] = React.useState('');
  const [nomAnimal, setNomAnimal] = React.useState('');

  const pull_dateNaiss = (datenaiss) => {
    setDateNaiss(datenaiss)
  }

  const pull_dateAdoption = (dateadp) => {
    setDateAdoption(dateadp);
  }

  const pull_dateVeterinaire = (datevet) => {
    setDateVeterinaire(datevet);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        {etape < 5 &&
          <Text style={styles.pageTitle}> Ajoutez votre animal {etape}/4</Text>
        }

        {etape == 1 &&
          <View style={styles.etape}>
            <View style={styles.blocName}>
              <TextInput value={nomAnimal} onChangeText={setNomAnimal} placeholder="Nom d'animal" style={styles.btnInput}></TextInput>
            </View>

            <View style={styles.blocRadio}>
              <RadioButton data={genderChoice} onSelect={undefined} />
              <RadioButton data={typeChoice} onSelect={undefined} />
            </View>

            <View style={styles.blocCalendar}>
              <View style={[styles.calendar]}>
                <TouchableOpacity activeOpacity={0.5} style={styles.calendarContainer} onPress={() => setAffNaiss(!affNaiss)} >
                  {dateNaiss == '' &&
                    <Text style={styles.btnCalendar}>Date de naissance</Text>
                  }
                  {dateNaiss != '' &&
                    <Text style={styles.btnCalendar}>{dateNaiss}</Text>
                  }
                  <IconCalendar></IconCalendar>
                </TouchableOpacity>

                {affNaiss == true &&
                  <Calendar func={pull_dateNaiss}></Calendar>
                }
              </View>

              <View style={[styles.calendar]}>
                <TouchableOpacity activeOpacity={0.5} style={styles.calendarContainer} onPress={() => setAdopt(!affAdopt)}>
                  {dateAdoption == '' &&
                    <Text style={styles.btnCalendar}>Date de naissance</Text>
                  }
                  {dateAdoption != '' &&
                    <Text style={styles.btnCalendar}>{dateAdoption}</Text>
                  }
                  <IconCalendar></IconCalendar>
                </TouchableOpacity>

                {affAdopt == true &&
                  <Calendar2 func={pull_dateAdoption}></Calendar2>
                }
              </View>
            </View>

            <View style={styles.blocAnimal}>
              <Text style={styles.subtitle}>Votre animal est :</Text>
              <FlatList
                horizontal={true}
                data={poids}
                renderItem={({ item }) => <TouchableOpacity activeOpacity={.7} style={[{ backgroundColor: item.bg }, styles.listItem]}><Text>{item.gabarit}</Text><Text> {item.tranche}</Text></TouchableOpacity>}
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

        {etape == 2 &&
          <View style={styles.etape}>
            <Text style={styles.question}>Est-ce que votre animal a des allergies et/ou intolérances alimentaires?</Text>
            <RadioButton data={genderChoice} onSelect={undefined} />
            <Text style={styles.question}>Si oui, à quoi?</Text>
            <TextInput style={styles.answer} multiline={true} numberOfLines={5}></TextInput>
            <Text style={styles.question}>Est-ce que votre animal a des problèmes de santé?</Text>
            <RadioButton data={genderChoice} onSelect={undefined} />
            <Text style={styles.question}>Si oui, lesquels?</Text>
            <TextInput style={styles.answer} multiline={true} numberOfLines={5}></TextInput>
          </View>
        }

        {etape == 3 &&
          <View style={styles.etape}>
            <Text style={styles.question}>Est-ce que votre animal a des médicaments à consommer?</Text>
            <RadioButton data={genderChoice} onSelect={undefined} />
            <Text style={styles.question}>Si oui, lesquels et à quelle fréquence?</Text>
            <TextInput style={styles.answer} multiline={true} numberOfLines={5}></TextInput>
            <Text style={styles.question}>Veuillez indiquer la date de la dernière consultation vétérinaire de votre animal.</Text>

            <View style={[styles.calendar]}>
              <TouchableOpacity activeOpacity={0.5} style={styles.calendarContainer} onPress={() => setAffVet(!affVet)}>
                {dateVeterinaire == '' &&
                  <Text style={styles.btnCalendar}>Date de naissance</Text>
                }
                {dateVeterinaire != '' &&
                  <Text style={styles.btnCalendar}>{dateVeterinaire}</Text>
                }
                <IconCalendar></IconCalendar>
              </TouchableOpacity>
            </View>

            {affVet == true &&
              <Calendar3 func={pull_dateVeterinaire}></Calendar3>
            }

            <Text style={styles.question}>Vous pouvez saisir une description générale de votre fidèle compagnon/compagnonne :)</Text>
            <TextInput multiline={true} numberOfLines={5} style={styles.answer}></TextInput>
          </View>
        }

        {etape == 4 &&
          <View style={styles.etape}>
            <Text style={styles.question}>Chargez des photos de votre animal</Text>
            <Upload onImageUrlChange={(imageUrl) => { url.push(imageUrl) ; setUrl(url); }} />
            {url.length > 0 &&
                <Image style={{width: 50, height: 50}} source={{ uri: url[0] }} />
            }

          </View>
        }

        {etape == 5 &&
          <View style={styles.etape}>
            <Image style={styles.img} source={require('../assets/confetti.png')}></Image>
            <Text style={styles.confirmAjout}>Vous avez ajouté votre animal!</Text>
          </View>
        }

        <View style={styles.footer}>
          {etape == 5 &&
            <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]} onPress={() => setEtape(1)}>
              <Text>Ajouter un autre animal</Text>
            </TouchableOpacity>
          }
          {etape > 1 && etape < 5 &&
            <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.retour]} onPress={() => setEtape(etape - 1)}>
              <Text>Revenir en arrière</Text>
            </TouchableOpacity>
          }

          {etape < 4 &&
            <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]} onPress={() => setEtape(etape + 1)}>
              <Text>Continuer {etape}/4</Text>
            </TouchableOpacity>
          }

          {etape == 4 &&
            <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]} onPress={() => setEtape(etape + 1)}>
              <Text>Ajouter mon animal {etape}/4</Text>
            </TouchableOpacity>
          }


          {etape == 5 &&
            <TouchableOpacity activeOpacity={0.5} style={[styles.btnFooter, styles.bg]} onPress={() => navigation.navigate('Home')}>
              <Text>Accueil</Text>
            </TouchableOpacity>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
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
  },
  etape: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  item: {
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
    width: '80%',
  },

  calendar: {
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingRight: 8,
    width: '100%',
    borderRadius: 5,
  },

  calendarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    minHeight: 50,
    backgroundColor: '#FFF6E3',
    width: '100%',
    borderRadius: 5,
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
    borderWidth: 1,
    borderColor: '#000',
  },
  question: {
    fontSize: 16,
    marginBottom: 25,
    textAlign: 'center',
  },
  answer: {
    backgroundColor: '#FFF6E3',
    width: '100%',
    marginBottom: 40,
    borderRadius: 5,
    minHeight: 50,
  },
  img: {
    width: '100%',
    minHeight: 220,
  },
  confirmAjout: {
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 60,
  }
});
