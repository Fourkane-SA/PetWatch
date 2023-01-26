import { StyleSheet, Text, View } from 'react-native';
import Login from "./screens/Login";
import {ChoiceRole} from "./screens/ChoiceRole";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {FormPro} from "./screens/FormPro";
import Upload from "./components/Upload";
import axios from "axios";
import TestUploadScreen from "./screens/testUploadScreen";

axios.defaults.baseURL = "https://petwatcher.fourkane.me/api"
axios.defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiYWl0IjoxNjc0NjUzNDI3LCJleHAiOjE2NzczMzE4Mjd9.PN9VDxYzFHwDqcuwfbzViDx-kSI4Nzh70P56_nZc9CQ'
const Stack = createNativeStackNavigator();
export default function App() {
  /*return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="login" >
              <Stack.Screen options={{headerShown: false}} name="login" component={Login}></Stack.Screen>
              <Stack.Screen options={{headerShown: false}} name="choiceRole" component={ChoiceRole}></Stack.Screen>
              <Stack.Screen options={{headerShown: true, headerTitle: ''}} name="formPro" component={FormPro} ></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
  );*/
    return (
    <TestUploadScreen></TestUploadScreen>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
