import React from 'react'
import { StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function LoginScreen() {
  return (
    <SafeAreaView style={{flex:3, justifyContent:'center',backgroundColor:'yellow',margin:5 ,padding:50, transform:[{rotate:'1deg'}]}}>
    <View >
      <Text style={{fontSize:50}}>Login Screen</Text>
      <View style={{ justifyContent:'center', padding:15,width:400, flexDirection:'row', alignContent:'space-around',backgroundColor:'red' ,width:100, transform:[{rotate:'-1deg'}]}} >
      <MaterialIcons name='alternate-email' size={20} color='#666'/>
      <TextInput placeholder='Email ID'/>
      </View>
    </View>
    </SafeAreaView>
  )
}



// rfc