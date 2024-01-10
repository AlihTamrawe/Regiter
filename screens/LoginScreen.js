import React from 'react'
import { StyleSheet,Button, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    
    </SafeAreaView>
  )
}



// rfc