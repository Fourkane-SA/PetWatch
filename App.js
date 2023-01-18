import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LogoTitle from './components/LogoTitle';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={HomeScreen} options={{headerTitle: (props) => <LogoTitle {...props} />}}/>
        <Stack.Screen name='Inscription' component={RegisterScreen} options={{headerTitle: (props) => <LogoTitle {...props} />}}/>
        <Stack.Screen name='Connexion' component={LoginScreen} options={{headerTitle: (props) => <LogoTitle {...props} />}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;