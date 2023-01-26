// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Dimensions } from "react-native";

// var width = Dimensions.get('window').width; //full width

// const HomeScreen = () => {
//     return(
//         <View style={styles.container}>
//             <Text style={styles.text}>HomeScreen</Text>
//         </View>
//     );
// }

// const CartScreen  = () => {
//     return(
//         <View style={styles.container}>
//             <Text style={styles.text}>CartScreen</Text>
//         </View>
//     );
// }
// // 
// const ImageScreen = () => {
//     return(
//         <View style={styles.container}>
//             <Text style={styles.text}>ImageScreen</Text>
//         </View>
//     );
// }

// const ProfileScreen = () => {
//     return(
//         <View style={styles.container}>
//             <Text style={styles.text}>ProfileScreen</Text>
//         </View>
//     );
// }

// const Tab = createBottomTabNavigator();

// const navbarBottom = () => {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen 
//                     name='Home' 
//                     component={HomeScreen}
//                     options={{ 
//                         tabBarIcon: ({ color, size }) => (
//                             <Icon name="home" color={color} size={size} />
//                         ),
//                     }}
//                 />
//                 <Tab.Screen 
//                     name='Cart'
//                     component={CartScreen} 
//                     options={{ 
//                         tabBarIcon: ({ color, size }) => (
//                             <Icon name="shopping-cart" color={color} size={size} />
//                         ),
//                     }}
//                 />
//                 <Tab.Screen 
//                     name='Images'
//                     component={ImageScreen} 
//                     options={{ 
//                         tabBarIcon: ({ color, size }) => (
//                             <Icon name="images" color={color} size={size} />
//                         ),
//                     }}
//                 />
//                 <Tab.Screen 
//                     name='Profile'
//                     component={ProfileScreen} 
//                     options={{ 
//                         tabBarIcon: ({ color, size }) => (
//                             <Icon name="user" color={color} size={size} />
//                         ),
//                     }}
//                 />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         width: width,
//     },
//     text: {
//         fontSize:20,
//     },
// });

// export default navbarBottom;