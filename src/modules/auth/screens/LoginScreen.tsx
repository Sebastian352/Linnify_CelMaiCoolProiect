import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} />
      <View style={styles.spacerStyle} />
      <TextInput style={styles.textInput} />
      <View style={styles.spacerStyle} />
      <Pressable style={styles.buttonStyle} />
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
    width: '90%',
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

export default LoginScreen;
