import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
      title='press me '
        style={styles.button}
        onPress={()=>{alert('yes hit')}}
      >  </Button>
      <StatusBar style="auto" />
    </View>
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
    
  }
});
