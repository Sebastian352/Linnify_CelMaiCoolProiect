import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS} from '../../../constants/themes';
import FilterComponent from '../components/FilterComponent';
import SearchBarcomponent from '../components/SearchBarComponent';
import FilterBarComponent from '../components/FilterBarComponent';
import CardComponent from '../components/CardComponent';
import {getMovies} from '../../../services/movie.service';
import FlatListComponent from '../components/FlatListComponent';

/*
  https://6453db49e9ac46cedf31a3e5.mockapi.io/movies?
  queryParams: search,page,limit,fieldName
*/

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const setVisible = () => {
    setModalVisible(!isModalVisible);
  };
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies(10, page).then((data: []) => {
      setMovies([...data, ...movies]);
    });
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBarcomponent />
      <FilterBarComponent setVisible={setVisible} />
      <View style={styles.separator}></View>
      <FlatListComponent movies={movies} />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={setVisible}
        style={styles.modalStyle}>
        <SafeAreaView style={styles.internalModalStyle}>
          <Text style={styles.textStyle}>I am the modal content!</Text>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  separator: {width: '100%', height: 32},
  filterContainer: {
    marginTop: 32,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  textStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  favoriteButton: {
    width: 100,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  modalStyle: {
    width: '100%',
    height: '100%',
    margin: 0,
    justifyContent: 'flex-end',
  },
  internalModalStyle: {
    width: '100%',
    height: '45%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 32,
  },
});

export default HomeScreen;
