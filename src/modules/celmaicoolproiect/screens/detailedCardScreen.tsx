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

    if(currentMovies === undefined){
      currentMovies = [];
    }
    console.log(favorite);
    if (favorite) {
      console.log("am intrat aici");
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
        currentMovies?.push(movie);
        console.log('am ajuns aici'+currentMovies);
        if (!currentUser) {
          const newUser = {
            ...currentUser,
            currentMovies,
          };
          addFavorite(newUser);
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
    console.log(index);
    if (index != -1) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };


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
