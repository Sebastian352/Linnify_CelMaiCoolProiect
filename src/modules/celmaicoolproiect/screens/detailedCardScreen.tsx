import {SafeAreaView, StyleSheet} from 'react-native';

import DetailedCardComponent from '../components/DetailedCardComponent';
import {CardProps} from '../../types/CardProps';
import useAuthStore from '../../auth/store/useAuthStore';
import {useEffect, useState} from 'react';

const DetailedCardScreen = ({route}) => {
  const addFavorite = useAuthStore().updateUser;
  const currentUser = useAuthStore().user;
  const [favorite, setFavorite] = useState(false);

  const faveMovie = (movie: CardProps) => {
    let currentMovies: any[] | undefined = currentUser?.favoriteMovies;
    checkFavorite();

    if (favorite) {
      let index = currentUser?.favoriteMovies?.findIndex(
        item => item.id === route.params.props.prop.id,
      );
      currentMovies?.map(movie => movie.id);
      currentMovies?.pop();
      if (!currentUser) {
        const newUser = {
          ...currentUser,
          currentMovies,
        };
        addFavorite(newUser);
      }
      setFavorite(false);
    } else {
      let index = currentUser?.favoriteMovies?.findIndex(
        item => item.id === route.params.props.prop.id,
      );
      if (index === -1) {
        currentMovies?.push(movie);
        if (!currentUser) {
          const newUser = {
            ...currentUser,
            currentMovies,
          };
          addFavorite(newUser);
        }
      }
      setFavorite(true);
    }
  };

  useEffect(() => {
    checkFavorite();
  }, []);
  const checkFavorite = () => {
    let index = currentUser?.favoriteMovies?.findIndex(
      item => item.id === route.params.props.prop.id,
    );
    if (index != -1) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };
  const printUser = () => {
    console.log(currentUser?.favoriteMovies);
  };
  printUser();

  return (
    <SafeAreaView style={styles.container}>
      <DetailedCardComponent
        movie={route.params}
        addFave={faveMovie}
        favorite={favorite}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'red',
  },
});

export default DetailedCardScreen;
