import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FilterComponent from './FilterComponent';
import {useState} from 'react';
import Modal from 'react-native-modal';

interface Props {
  setVisible: (filter: string) => void;
}

const FilterBarComponent = (props: Props) => {
  return (
    <View style={styles.filterContainer}>
      <FilterComponent
        onPress={() => props.setVisible('')}
        text="Popular"
        active={true}
      />
      <FilterComponent
        onPress={() => props.setVisible('Rock')}
        text="Horror"
        active={false}
      />
      <FilterComponent
        onPress={() => props.setVisible('Hip Hop')}
        text="Adventure"
        active={false}
      />
      <FilterComponent
        onPress={() => props.setVisible('Jazz')}
        text="Comedy"
        active={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    marginTop: 32,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default FilterBarComponent;
