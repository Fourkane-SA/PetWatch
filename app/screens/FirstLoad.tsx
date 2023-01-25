import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Logo from '../assets/moduleSVG/logoSVG'
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//
// TODO : Verification connexion puis si oui redirection home sinon redirection page connexion
//
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo></Logo>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F89300',
    width : width,
    height: height,
  },
});
