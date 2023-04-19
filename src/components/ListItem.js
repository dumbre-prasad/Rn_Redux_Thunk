import React from 'react';
import {Button} from 'react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {usePlace} from '../redux/actions/usePlace';

const ListItem = ({placeName, keyValue}) => {
  const {deletePlace} = usePlace();

  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Text>{placeName}</Text>
      </View>
      <Button title="Delete" onPress={() => deletePlace(keyValue)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
});

export default ListItem;
