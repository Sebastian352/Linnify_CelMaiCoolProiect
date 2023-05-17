import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import {COLORS} from '../../../constants/themes';
import FlatListComponent from '../components/FlatListComponent';
import {useEffect, useState} from 'react';
import useAuthStore from '../../auth/store/useAuthStore';

const FavoriteScreen = () => {
  const changePage = (refresh: boolean) => {
    if (refresh) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const savedMovies = useAuthStore().user;

  useEffect(() => {
    setMovies(savedMovies?.favoriteMovies);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatListComponent movies={movies} changePage={changePage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    padding: 16,
  },
});

export default FavoriteScreen;
