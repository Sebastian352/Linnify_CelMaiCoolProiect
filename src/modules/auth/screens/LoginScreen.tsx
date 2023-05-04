import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import LoginComponent from '../components/LoginComponent';
import useAuthStore from '../store/useAuthStore';




const LoginScreen = () => {
  const users = useAuthStore().users;
  const setCurrentUser = useAuthStore().setCurrentUser;
  const onLogin = (email:string,password:string) => {
    console.log({email, password, users})
    setCurrentUser(users.find((item)=> (item.email === email && item.password === password)))
  }
  return (
    <SafeAreaView style={styles.container}>
      <LoginComponent onPress={onLogin}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
