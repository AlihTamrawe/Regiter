import React from 'react'
import { StyleSheet,Button, Text, View,TextInput, TouchableOpacity,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Svg, { Path } from "react-native-svg"
export default function InputField({label,icon,inputType,keyboardType,feildButtonFunction,feildButtonlable}) {
  return (
    
    <View style={{ color:'#666',flexDirection:'row', marginRight:5,marginBottom:5,borderBottomWidth:1, justifyContent:'center', padding:15,width:400, flexDirection:'row', alignContent:'space-around',backgroundColor:'white' ,width:'auto', transform:[{rotate:'-1deg'}]}} >
    {icon}

    {/* <Ionicons name='ios-lock-closed-outline' size={20} color='#166'/> */}
    {inputType=='password' ? (
    <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        style={{flex:1,paddingVertical:0}}
        secureTextEntry={true}
    />):(
        <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        style={{flex:1,paddingVertical:0}}
        secureTextEntry={true}
     />
      )}
     <TouchableOpacity onPress={()=>{feildButtonFunction}} >
      <Text style={{fontWeight:'700',fontSize:16,color:'#AD40AF'}} >{feildButtonlable}</Text>
     </TouchableOpacity>
    </View>
   
  )
}
