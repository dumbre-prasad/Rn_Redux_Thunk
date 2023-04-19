// App.js
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './src/components/ListItem';
import {usePlace} from './src/redux/actions/usePlace';

const App = () => {
  const {addPlace} = usePlace();
  const places = useSelector(state => state?.places?.places);

  const [state, setState] = useState({
    placeName: '',
    places: [],
  });

  const placeSubmitHandler = () => {
    if (state.placeName.trim() === '') {
      return;
    }
    addPlace(state.placeName);
  };
  const placeNameChangeHandler = value => {
    setState({
      placeName: value,
    });
  };
  const placesOutput = () => {
    return (
      <FlatList
        style={styles.listContainer}
        data={places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => (
          <ListItem placeName={info.item.value} keyValue={info.item.key} />
        )}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Seach Places"
          style={styles.placeInput}
          value={state.placeName}
          onChangeText={placeNameChangeHandler}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={placeSubmitHandler}
        />
      </View>
      <View style={styles.listContainer}>{placesOutput()}</View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
  listContainer: {
    width: '100%',
  },
});
