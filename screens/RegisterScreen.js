import React from 'react'
import { 
  StyleSheet
  ,Button
  , Text
  , View
  ,TextInput
  , TouchableOpacity
  ,Image
  ,ScrollView
 } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Svg, { Path } from "react-native-svg"
import InputField from '../component/InputField';
import CustomButton from '../component/CustomButton';
export default function RegisterScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:4,width:'100%', justifyContent:'center',backgroundColor:'#0C8BA50',margin:5 ,padding:50, transform:[{rotate:'1deg'}]}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:'25'}} >
    <View style={{ flex:1 ,justifyContent:'center',width:480,height:200}}>
      <Image 
                source={require('../assets/car.png')}
      style={{ width:"60%", height:"60%" }}
      ></Image>
    </View>
    <View>
    <Text style={{fontSize:50}}>Register Screen</Text>
    </View>
    {/* <View  style={{ flexDirection:'row',alignItems:'center',borderBottomColor:'#ccc',paddingHorizontal:25, marginRight:5,marginBottom:5, padding:15,width:400, flexDirection:'row', alignContent:'space-around',backgroundColor:'white' ,width:'auto', transform:[{rotate:'-1deg'}]}} >
        <MaterialIcons name='alternate-email' size={20} />
        <TextInput placeholder='Email ID'style={{ fontWeight:'500',height:20,width:'auto'}}/>
    </View> */}
    <InputField
      label={'Email ID'}
      icon={
      <MaterialIcons 
        name="alternate-email" 
        size={20}
        color='#066'
        style={{marginRight:5}}

       />}
        keyboardType='email-address'
    
    />

    <InputField
      label={'Full name'}
      icon={
      <Ionicons
      name='person-outline'
      size={20}
      color='#066'
      style={{marginRight:5}}/>}
      
    />
    
    <InputField
      label={'Password'}
      icon={
      <Ionicons
      name='ios-lock-closed-outline'
      size={20}
      color='#166'
      style={{marginRight:5}}/>}
      inputType="password"
      feildButtonFunction={()=>{} }
      feildButtonlable="see/show"
    />

    <InputField
      label={'Confirm Password'}
      icon={
      <Ionicons
      name='ios-lock-closed-outline'
      size={20}
      color='#166'
      style={{marginRight:5}}/>}
      inputType="password"
      feildButtonFunction={()=>{} }
      feildButtonlable="see/show"
    />

    {/* old code */}
     {/* <View style={{ color:'#666',flexDirection:'row', marginRight:5,marginBottom:5,borderBottomWidth:1, justifyContent:'center', padding:15,width:400, flexDirection:'row', alignContent:'space-around',backgroundColor:'white' ,width:'auto', transform:[{rotate:'-1deg'}]}} >
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
      <Text style={{fontWeight:'700',fontSize:16,color:'#fff'}} >Register</Text>
     </TouchableOpacity>
    </View> */}

          {/* New Code */}
    <CustomButton
      lable="Register"
      onPress={()=>{}}

    />
    <Text style={{textAlign:'center',color:'#666',marginBottom:30}}>
      Or, Register with
    </Text>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',  alignContent:'center',justifyContent:'center'}}>

    <TouchableOpacity style={{margin:5,display:'flex',flexDirection:'row',justifyContent:'space-between',alignContent:'space-between',borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}}>
    
        
    <View>
    <Svg xmlns="http://www.w3.org/2000/Svg" height="48px" viewBox="0 0 24 24" width="48px"><Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  <Path d="M1 1h22v22H1z" fill="none"/></Svg>
    </View>
    </TouchableOpacity> 
    <TouchableOpacity style={{margin:5,display:'flex',flexDirection:'row',justifyContent:'space-between',alignContent:'space-between',borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}}>
    
    <View  >
    <Svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="50px" height="50px">
      <Path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><Path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/>
      </Svg>
    </View>
    </TouchableOpacity> 
    <TouchableOpacity style={{margin:5,display:'flex',flexDirection:'row',justifyContent:'space-between',alignContent:'space-between',borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}}>

    <View  >
    <Svg xmlns="http://www.w3.org/2000/Svg"  viewBox="0 0 50 50" width="50px" height="50px">
      <Path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"/>
      </Svg>
    </View>
          </TouchableOpacity>
          </View>
        <View style={{flexDirection:'column',alignItems:'center',marginBottom:30}}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={{color:'#AD40AF',fontWeight:'700',}}>Login</Text>

          </TouchableOpacity>
        </View>
        </ScrollView>
  </SafeAreaView>
  )
}
