import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import useAuthStore from '../../auth/store/useAuthStore';
import { AvatarComponent } from '../components/AvatarComponent';


const AccountScreen = () => {
  const currentUser = useAuthStore().user;

  const setCurrentUser = useAuthStore().setCurrentUser;
  const logOut = () =>{
    setCurrentUser(null);
  }
  
  return (
    <View style={styles.container}>
      <AvatarComponent user={currentUser}/>
      <View style={styles.textContainer}>
          <View style={styles.underlineStyle}>
          <Text style={styles.textStyle}>{currentUser?.email}</Text>
        </View>
          <View style={styles.underlineStyle}>
          <Text style={styles.textStyle}>{currentUser?.password}</Text>
        </View>
      </View>
      <Pressable style={styles.logoutButton} onPress={logOut}/>
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
    borderBottomWidth:5,
    borderColor:'black',
  },
  logoutButton:{
    backgroundColor:'tomato',
    width:100,
    height:50,
  }
});

export default AccountScreen;
