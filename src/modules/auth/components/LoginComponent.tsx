import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
  } from 'react-native';
  
import { useState } from 'react';

  interface Props{
    onPress: (email:string,password:string) => void
  }

  const LoginComponent = (props:Props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} value={email} onChangeText={setEmail}/>
        <View style={styles.spacerStyle} />
        <TextInput style={styles.textInput} value={pass} onChangeText={setPass}/>
        <View style={styles.spacerStyle} />
        <Pressable style={styles.buttonStyle} onPress={() => props.onPress(email,pass)}/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'tomato',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      width: 300,
      padding: 10,
      color: 'black',
      backgroundColor: 'white',
      height: 50,
    },
    buttonStyle: {
      width: 100,
      height: 50,
      backgroundColor: 'lightgreen',
      fontWeight: 'bold',
    },
    spacerStyle: {
      width: '100%',
      height: 32,
      backgroundColor: 'tomato',
    },
  });
  
  export default LoginComponent;