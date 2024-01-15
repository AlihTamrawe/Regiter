import React from 'react'
import { StyleSheet,Button, Text, View } from 'react-native';
import {NavigationContainor} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator();
 function AuthStack() {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>

        



    </Stack.Navigator>
  )
}

export default AuthStack;