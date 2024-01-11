import React from 'react'
import { StyleSheet,Button, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Logo from '../assets/google.svg';
import Svg, { Path } from "react-native-svg"


export default function LoginScreen() {
  return (
    <SafeAreaView style={{flex:1,width:'100%', justifyContent:'center',backgroundColor:'#0C8BA50',margin:5 ,padding:50, transform:[{rotate:'1deg'}]}}>
      <View>
      <Text style={{fontSize:50}}>Login Screen</Text>
      </View>
      <View  style={{ flexDirection:'row',alignItems:'center',borderBottomColor:'#ccc',paddingHorizontal:25, marginRight:5,marginBottom:5, padding:15,width:400, flexDirection:'row', alignContent:'space-around',backgroundColor:'white' ,width:'auto', transform:[{rotate:'-1deg'}]}} >
          <MaterialIcons name='alternate-email' size={20} color='#066'/>
          <TextInput placeholder='Email ID'style={{ fontWeight:'500',height:20,width:'auto'}}/>
      </View>
      <View style={{ color:'#666',flexDirection:'row', marginRight:5,marginBottom:5,borderBottomWidth:1, justifyContent:'center', padding:15,width:400, flexDirection:'row', alignContent:'space-around',backgroundColor:'white' ,width:'auto', transform:[{rotate:'-1deg'}]}} >
      <Ionicons name='ios-lock-closed-outline' size={20} color='#166'/>
      <TextInput
        placeholder='password ID' 
        style={{flex:1,paddingVertical:0}}
        secureTextEntry={true}
       />
       <TouchableOpacity onPress={()=>{}} >
        <Text style={{fontWeight:'700',fontSize:16,color:'#AD40AF'}} >forget</Text>
       </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity  onPress={()=>{}} style={{alignItems:'center',backgroundColor:'#AD40AF',padding:20,borderRadius:10,marginBottom:30}}>
        <Text style={{fontWeight:'700',fontSize:16,color:'#fff'}} >Login</Text>
       </TouchableOpacity>
       
      </View>
      <Text style={{textAlign:'center',color:'#666',marginBottom:30}}>
        Or, login with
      </Text>
    
      <TouchableOpacity style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}}>
      
          
    
      <Svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><Path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/>
      <Path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/>
      </Svg>
            </TouchableOpacity>
    </SafeAreaView>
  )
}



// rfc