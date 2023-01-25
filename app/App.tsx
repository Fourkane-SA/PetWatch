import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import AddAnimal from './screens/addAnimal';
//import FirstLoad from './screens/firstLoad';
import SignInUp from './screens/signInUp'
import SignUp from './screens/signUp'


export default function App() {

  return (
    <View style={styles.container}>
      <SignInUp navigation={SignUp}></SignInUp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
