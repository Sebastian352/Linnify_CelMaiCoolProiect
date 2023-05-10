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
import CardComponent from './CardComponent';
import {CardProps} from '../../types/CardProps';
import {useState} from 'react';

const renderCardComponent = ({item}: ListRenderItemInfo<CardProps>) => {
  return <CardComponent prop={item} />;
};

interface FlatListProps {
  movies: CardProps[];
}

const FlatListComponent = (props: FlatListProps) => {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [endOfPage, setEndOfPage] = useState(false);
  const [refreshing, setRefresing] = useState(false);

  return (
    <FlatList
      data={props.movies}
      renderItem={renderCardComponent}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-evenly',
      }}
      ItemSeparatorComponent={separatorComponent}
    />
  );
};

const separatorComponent = () => {
  return <View style={stlyes.separator} />;
};

const stlyes = StyleSheet.create({
  separator: {width: '100%', height: 8},
});

export default FlatListComponent;
