import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import useAuthStore from '../../auth/store/useAuthStore';
import {AvatarComponent} from '../components/AvatarComponent';
import {COLORS} from '../../../constants/themes';

const AccountScreen = () => {
  const currentUser = useAuthStore().user;

  const setCurrentUser = useAuthStore().setCurrentUser;
  const logOut = () => {
    setCurrentUser(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <AvatarComponent user={currentUser} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.underlineStyle}>
          <Text style={styles.textStyle}>{currentUser?.email}</Text>
        </View>
        <View style={styles.underlineStyle}>
          <Text style={styles.textStyle}>{currentUser?.password}</Text>
        </View>
      </View>
      <Pressable style={styles.logoutButton} onPress={logOut} />
      <View style={styles.dunga} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dunga: {
    width: 300,
    height: 100,
    top: 80,
    backgroundColor: COLORS.secondary,
    transform: [{rotateZ: '-25deg'}],
    position: 'absolute',
    zIndex: -1,
  },
  textContainer: {
    justifyContent: 'space-around',
    width: '50%',
    height: 200,
    alignItems: 'center',
  },
  underlineStyle: {
    borderBottomWidth: 3,
    borderColor: 'darkblue',
    width: '75%',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  logoutButton: {
    backgroundColor: 'tomato',
    width: 100,
    height: 50,
  },
  imageContainer: {marginTop: 64},
});

export default AccountScreen;
