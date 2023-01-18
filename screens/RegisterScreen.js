import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Link } from '@react-navigation/native';

export default function RegisterScreen({navigation}) {
  const [mail, onChangeMail] = React.useState('')
  const [password, onChangePassword] = React.useState('')
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Inscription</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Adresse mail' 
                value={mail} 
                onChange={onChangeMail} 
            />
            <TextInput 
                style={styles.input} 
                placeholder='Mot de passe' 
                value={password} 
                onChange={onChangePassword} 
                secureTextEntry={true} 
            />
            <Button title='Inscription'></Button>
            <Text>Déjà inscrit ? 
                <Link to={{screen: 'Connexion'}} style={styles.link}> Se connecter</Link>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '70%',
    height: 40,
    padding: 10,
    margin: 5
  },
  link: {
    color: 'blue'
  }
})