import {Pressable, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../../constants/themes';
interface Props {
  text: string;
  active: boolean;
  onPress: () => void;
}

const FilterComponent = (props: Props) => {
  const checkActive = (active: boolean) => {
    const result = active ? styles.favoriteButton : styles.unfavoriteButton;
    return result;
  };

  const checkActiveText = (active: boolean) => {
    const result = active ? styles.textStyle : styles.unfavoriteTextStyle;
    return result;
  };

  return (
    <Pressable onPress={props.onPress} style={checkActive(props.active)}>
      <Text style={checkActiveText(props.active)}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  unfavoriteTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.iconWhite,
  },
  favoriteButton: {
    width: 100,
    height: 32,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  unfavoriteButton: {
    width: 80,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
export default FilterComponent;
