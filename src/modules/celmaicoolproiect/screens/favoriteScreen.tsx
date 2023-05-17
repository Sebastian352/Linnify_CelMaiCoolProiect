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
    setMovies(savedMovies?.favoriteMovies);
  };
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const savedMovies = useAuthStore().user;

  return (
    <SafeAreaView style={styles.container}>
      <FlatListComponent
        movies={savedMovies?.favoriteMovies}
        changePage={changePage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
});

export default FavoriteScreen;
