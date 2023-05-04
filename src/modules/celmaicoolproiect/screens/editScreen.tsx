import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    Image,
  } from 'react-native';
  import useAuthStore from '../../auth/store/useAuthStore';
  import { AvatarComponent } from '../components/AvatarComponent';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../navigation/routes/app-routes';
import { TabRoutes } from '../navigation/routes/tab-routes';
import { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
  


  const EditScreen = () => {
    const currentUser = useAuthStore().user;
    const navigation = useNavigation();

    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const updateUser = useAuthStore().updateUser;

    const users = useAuthStore().users;
    const  editUser = () =>{
      if(!currentUser)
        return;
        const newUser = {...currentUser,email,password:pass}
        updateUser(newUser);
    }
    
    const pickImage = async() =>{
      const image = await ImagePicker.openPicker({width:300,height:300,cropping:true, mediaType:'photo', includeBase64: true})
      if(!currentUser)
        return;

      const user = {...currentUser,profilePicture:`data:${image.mime};base64,${image.data}`};
      updateUser(user);
  }

  return (
      <View style={styles.container}>
        {!currentUser?.profilePicture ? <Image style={{width:100,height:100}} source={{uri: currentUser?.profilePicture}}/> : <AvatarComponent user={currentUser} pickImage={pickImage}/>}
        <View style={styles.textContainer}>
            <View style={styles.underlineStyle}>
                <TextInput placeholder={currentUser?.email} style={styles.textStyle} value={email} onChangeText={setEmail}/>
            </View>
            <View style={styles.underlineStyle}>
                <TextInput placeholder={currentUser?.password} style={styles.textStyle} value={pass} onChangeText={setPass}/>
            </View>
        </View>

        <Pressable style={styles.logoutButton} onPress={()=>navigation.navigate(TabRoutes.Account)}/>
        <Pressable style={styles.editButton} onPress={editUser}/>
      </View>
    );
  };
  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    textContainer:{
      justifyContent:'space-around',
      width:'50%',
      height:200,
      alignItems:'center'
    },
    underlineStyle:{
      borderBottomWidth:3,
      borderColor:'darkblue',
      width: '75%',
      alignItems:'center'
    },
    textStyle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      width:'100%',
      textAlign:'center'
    },
    logoutButton:{
      backgroundColor:'tomato',
      width:100,
      height:50,
    },
    editButton:{
        backgroundColor:'pink',
        width:100,
        height:50,
      }

  });
  
  export default EditScreen;
  