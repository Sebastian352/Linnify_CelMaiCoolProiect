import {Pressable, StyleSheet, View, Image, Text} from 'react-native';
import {User} from '../../auth/types/user';
import ImagePicker from 'react-native-image-crop-picker';
import Animated from 'react-native-reanimated';
import AnimatedCircle from './animatedCircleComponent';

interface Props {
  user: User | null;
  pickImage: () => void;
}

 const image = require('../../../assets/leo.jpg');

export const AvatarComponent = (props: Props) => {
  
  
  return (
  
      <Pressable onPress={props.pickImage} style={styles.containerStyle}>
        {[1,2,3].map((item) =><AnimatedCircle index = {item}/>)}
        {!props.user?.profilePicture ? (
          <Text style={styles.textProfile}>{props.user.email.charAt(0)}</Text>
        ) : (
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 45,
            }}
            source={image}
          />
        )}
      </Pressable>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: 150,
    height: 150,
    backgroundColor: 'lightblue',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:100,
  },
  textProfile: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'black',
  },
});
