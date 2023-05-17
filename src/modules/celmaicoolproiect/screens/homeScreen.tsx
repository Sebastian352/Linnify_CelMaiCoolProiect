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
import {searchHook} from '../hooks/use-search-hook';

/*
  https://6453db49e9ac46cedf31a3e5.mockapi.io/movies?
  queryParams: search,page,limit,fieldName
*/

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [pageModal, setPageModal] = useState(1);

  const theSearchQuery = (data: string) => {
    setSearchQuery(data);
  };

  const changePage = (refresh: boolean) => {
    if (refresh) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const changeModalPage = (refresh: boolean) => {
    console.log('modal');
    if (refresh) {
      setPageModal(0);
    } else {
      setPageModal(page + 1);
    }
  };

  useEffect(() => {
    if (page === 1) {
      getMovies(10, page, searchQuery).then((data: []) => {
        setMovies([...data]);
      });
    } else {
      getMovies(10, page, searchQuery).then((data: []) => {
        setMovies([...movies, ...data]);
      });
    }
  }, [page]);

  console.log('ASTA E PAGINA BAA =>>>>>' + page);

  useEffect(() => {
    getMovies(50, page, searchQuery).then((data: []) => {
      setMovies([...data]);
    });
  }, [searchQuery]);

  const [isModalVisible, setModalVisible] = useState(false);
  const setVisible = async (filter: string) => {
    await getMovies(10, pageModal, filter).then((data: []) => {
      setFilteredMovies([...data]);
    });

    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBarcomponent changeQuery={theSearchQuery} />
      <FilterBarComponent setVisible={setVisible} />
      <View style={styles.separator}></View>
      <FlatListComponent movies={movies} changePage={changePage} />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setVisible('')}
        style={styles.modalStyle}>
        <SafeAreaView style={styles.internalModalStyle}>
          <FlatListComponent
            movies={filteredMovies}
            changePage={changeModalPage}
          />
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
  modalStyle: {
    width: '100%',
    height: '100%',
    margin: 0,
    justifyContent: 'flex-end',
  },
  internalModalStyle: {
    width: '100%',
    height: '80%',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 32,
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
});

export default HomeScreen;
