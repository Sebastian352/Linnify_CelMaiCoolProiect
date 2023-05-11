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
import {useEffect, useState} from 'react';

const renderCardComponent = ({item}: ListRenderItemInfo<CardProps>) => {
  return <CardComponent prop={item} />;
};

interface FlatListProps {
  movies: CardProps[];
  changePage: (refresh: boolean) => void;
}

const FlatListComponent = (props: FlatListProps) => {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [endOfPage, setEndOfPage] = useState(false);
  const [refreshing, setRefresing] = useState(false);

  const oER = () => {
    if (!loading && !loadingMore) props.changePage(false);
  };

  const oR = () => {
    if (!loading && !loadingMore) props.changePage(true);
  };
  {
    //   useEffect(() => {
    //     if (!endOfPage) {
    //       handleFetch();
    //     }
    //     setLoading(false);
    //     setLoadingMore(false);
    //     setRefresing(false);
    //   }, []);
  }
  return (
    <FlatList
      data={props.movies}
      renderItem={renderCardComponent}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      onEndReached={oER}
      onEndReachedThreshold={0.5}
      onRefresh={oR}
      refreshing={refreshing}
      columnWrapperStyle={{
        justifyContent: 'space-evenly',
      }}
      ListEmptyComponent={() => <ActivityIndicator size={'large'} />}
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
