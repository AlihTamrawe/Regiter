import React from 'react'
import { StyleSheet,Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function LoginScreen() {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center',backgroundColor:'yellow', transform:[{rotate:'1deg'}]}}>
    <View >
      <Text style={{fontSize:50}}>Login Screen</Text>
    </View>
    </SafeAreaView>
  )
}



// rfc