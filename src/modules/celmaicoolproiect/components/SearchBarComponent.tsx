import {StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from '../../../constants/themes';
import {SearchIcon} from '../../../assets/icons';

const SearchBarcomponent = () => {
  return (
    <View style={styles.container}>
      <SearchIcon width={16} height={16} />
      <TextInput style={styles.textInput} placeholder="search movie" />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    height: 58,
    color: COLORS.white,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    paddingLeft: 12,
    marginLeft: 8,
  },
  container: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 16,
    borderColor: COLORS.gray,
    width: '90%',
    padding: 3,
    paddingHorizontal: 16,
    height: 64,
  },
});
export default SearchBarcomponent;
