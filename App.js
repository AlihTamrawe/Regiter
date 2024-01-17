import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './navigationss/AuthStack';
import AppStack from './navigationss/AppStack';

export default function App() {
  
  return (
   <NavigationContainer>
      <AppStack/>
      <AuthStack />

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width:200,
    height:150,
    // color:'red',
    // borderRadius:50,
    // fontSize:40
    
  },Text:{
    margin:10,
    textAlign:"center",
    fontSize:20
  }
}); 
