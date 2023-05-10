import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ListRenderItemInfo,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {openCamera} from 'react-native-image-crop-picker';
import {COLORS} from '../../../constants/themes';
import {CardProps} from '../../types/CardProps';

const image = require('../../../assets/batman.jpg');

interface CardProp {
  prop: CardProps;
}

const CardComponent = (props: CardProp) => {
  return (
    <Pressable style={style.component}>
      <Image source={{uri: props.prop.image}} style={style.imageStyle} />
    </Pressable>
  );
};

const style = StyleSheet.create({
  component: {
    width: '44%',
    borderWidth: 5,
    borderColor: COLORS.lightgray,
    borderRadius: 40,
    backgroundColor: 'white',
    marginHorizontal: 25,
  },

  imageStyle: {
    zIndex: 1,
    height: 200,
    width: '100%',
    borderRadius: 32,
    maxWidth: '100%',
    maxHeight: '100%',
    resizeMode: 'stretch',
  },
});
export default CardComponent;
