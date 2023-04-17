// ListItem.js
import React from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {deletePlace} from '../redux/actions/place';
const ListItem = props => {
  console.log('props.key', props);
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
      </View>
      <Button title="Delete" onPress={() => props.delete(props.keyValue)} />
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: key => {
      dispatch(deletePlace(key));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
