import {StyleSheet, View} from 'react-native';
import FilterComponent from './FilterComponent';
import {useState} from 'react';

interface Props {
  setVisible: () => void;
}

const FilterBarComponent = (props: Props) => {
  return (
    <View style={styles.filterContainer}>
      <FilterComponent
        onPress={props.setVisible}
        text="popular"
        active={true}
      />
      <FilterComponent
        onPress={props.setVisible}
        text="trending"
        active={false}
      />
      <FilterComponent
        onPress={props.setVisible}
        text="resent"
        active={false}
      />
      <FilterComponent onPress={props.setVisible} text="new" active={false} />
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
});
export default FilterBarComponent;
