import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ListRenderItemInfo,
} from 'react-native';
import {COLORS} from '../../../constants/themes';
import Animated,{BounceIn, BounceInUp} from 'react-native-reanimated';
import {
  BookMarkIcon,
  IMDBIcon,
  RottenTomatoes,
  StarIcon,
} from '../../../assets/icons';
import {ScrollView} from 'react-native-gesture-handler';
import {CardProps} from '../../types/CardProps';
import {useNavigation} from '@react-navigation/native';
import {ArrowIcon} from '../../../assets/icons';
import {useState} from 'react';
interface Props {
  movie: CardProps;
  addFave: (movie: CardProps) => void;
  favorite: boolean;
}

const bogdan = require('../../../assets/bogdan.jpg');
const sebi = require('../../../assets/sebi.jpg');
const leo = require('../../../assets/leo.jpg');

const DetailedCardComponent = (props: Props) => {
  const navigation = useNavigation();

  const faveFunc = () => {
    props.addFave(movie);
  };

  const movie = props.movie.props.prop;
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: movie.image}} style={styles.imageStyle} />
      <Pressable style={styles.backButton} onPress={navigation.goBack}>
        <ArrowIcon width={28} height={28} fill={COLORS.lightWhite} />
      </Pressable>
      <View style={{height: '25%'}} />
      <ScrollView
        style={styles.bottomContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.containerDirective}>
          <View>
            <Text style={styles.titleStyle}>{movie.title}</Text>
            <View style={styles.flexAlign}>
              <Text style={[styles.mainTextStyle, {marginRight: 16}]}>
                {movie.studio}
              </Text>
              <View style={[styles.ratingStyle, styles.flexAlign]}>
                <View style={styles.flexAlign}>
                  <StarIcon width={16} height={16} fill={COLORS.primary} />
                </View>
                <Text style={styles.goldenTextStyle}>
                  {(movie.tomato % 5) + '.' + (movie.tomato % 10)} (
                  {movie.tomato % 1000})
                </Text>
              </View>
            </View>
          </View>
          <Pressable style={styles.bookmarkButtonStyle} onPress={faveFunc}>
            {
            props.favorite ?
            <Animated.View key={1} entering={BounceIn}> 
              <BookMarkIcon 
                  width={32}
                  height={32}
                  fill={COLORS.lightWhite}
            /> 
            </Animated.View> : 
            <Animated.View key={2} entering={BounceIn}>
               <BookMarkIcon 
                  width={32}
                  height={32}
                  fill={COLORS.primary}
          />
            </Animated.View>}
          </Pressable>
        </View>
        <View style={styles.containerDirective}>
          <IMDBIcon width={40} height={40} />
          <View style={styles.ratingStyle}>
            <Text style={styles.miniTitleStyle}>
              {movie.tomato % 10}.{movie.imdb % 10}
              /10
            </Text>
            <Text style={styles.mainTextStyle}>Overall Rating</Text>
          </View>
          <RottenTomatoes width={40} height={40} />
          <View style={styles.ratingStyle}>
            <Text style={styles.miniTitleStyle}>{movie.tomato % 100}%</Text>
            <Text style={styles.mainTextStyle}>Average Tomatometer</Text>
          </View>
        </View>
        <View style={styles.containerDirective}>
          <Text style={styles.miniTitleStyle}> Cast</Text>
        </View>
        <View style={styles.containerDirective}>
          <View style={styles.flexAlign}>
            <View style={styles.mainActorCircle}>
              <Image source={bogdan} style={styles.personIcon} />
            </View>
            <View style={styles.actorCircle}>
              <Image source={sebi} style={styles.personIcon} />
            </View>
            <View style={[styles.actorCircle, {left: -16}]}>
              <Image source={leo} style={styles.personIcon} />
            </View>
            <View style={[styles.actorCircle, {left: -24}]}>
              <Image source={bogdan} style={styles.personIcon} />
            </View>
            <Text
              style={[styles.mainTextStyle, {position: 'relative', left: -16}]}>
              20+ cast
            </Text>
          </View>
          <Text style={styles.goldenTextStyle}>Show All On IMDb</Text>
        </View>
        <View style={styles.containerDirective}>
          <Text style={styles.miniTitleStyle}> Storyline</Text>
        </View>
        <View style={styles.containerDirective}>
          <Text style={styles.mainTextStyle}>{movie.storyline}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const changeFavorite = () => {};

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: COLORS.primary,
    marginTop: 24,
    padding: 32,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  topContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'red',
  },
  containerDirective: {
    marginTop: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.lightWhite,
  },
  miniTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.lightWhite,
  },
  mainTextStyle: {
    color: COLORS.iconWhite,
    fontSize: 12,
    textAlign: 'justify',
  },
  goldenTextStyle: {
    fontSize: 16,
    color: 'gold',
  },
  bookmarkButtonStyle: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.iconWhite,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingStyle: {marginHorizontal: 16},
  flexAlign: {
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainActorCircle: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: COLORS.iconWhite,
  },
  actorCircle: {
    position: 'relative',
    left: -8,
  },
  imageStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.lightgray,
    width: 50,
    height: 50,
    marginTop: 40,
    marginHorizontal: 32,
  },
  personIcon: {
    borderRadius: 50,
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: COLORS.lightWhite,
  },
});
export default DetailedCardComponent;
