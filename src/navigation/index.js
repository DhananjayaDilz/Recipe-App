import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='Welcome' 
            screenOptions={{headerShown:false,}}
            >
                <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
                <Stack.Screen name='Welcome' component={WelcomeScreen}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    );
}


