import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import AddAnimal from './screens/addAnimal';
import FirstLoad from './screens/FirstLoad'

export default function App() {
  return (
    <View style={styles.container}>
      <FirstLoad></FirstLoad>
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
