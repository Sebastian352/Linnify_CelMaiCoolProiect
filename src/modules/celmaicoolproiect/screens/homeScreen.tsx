import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home</Text>
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
  textStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
