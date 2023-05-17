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
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../navigation/routes/app-routes';

interface CardProp {
  prop: CardProps;
}

const CardComponent = (props: CardProp) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={style.component}
      onPress={() => {
        navigation.navigate(AppRoutes.Details, {props});
      }}>
      <Image source={{uri: props.prop.image}} style={style.imageStyle} />
    </Pressable>
  );
};

const style = StyleSheet.create({
  component: {
    width: '48%',
    borderWidth: 5,
    borderColor: COLORS.lightgray,
    borderRadius: 40,
    backgroundColor: 'white',
  },

  imageStyle: {
    zIndex: 1,
    height: 220,
    width: '100%',
    borderRadius: 32,
    maxWidth: '100%',
    maxHeight: '100%',
    resizeMode: 'stretch',
  },
});
export default CardComponent;
