import React from 'react'
import { StyleSheet,Button, Text, View,TextInput, TouchableOpacity,Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import Svg, { Path } from "react-native-svg"
export default function CustomButton({lable,onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress} 
      style={{
        alignItems:'center',
        backgroundColor:'#AD40AF',
        padding:20,
        borderRadius:10,
        marginBottom:30
        }}>
    <Text
    
    style={{
        fontWeight:'700',
        fontSize:16,
        color:'#fff'
        }} >
            {lable}
            </Text>
   </TouchableOpacity>
   
  )
}
