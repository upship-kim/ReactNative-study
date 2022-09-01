import {View, StyleSheet} from 'react-native';
import React from 'react';

const AddTodo = () => {
  const {block} = styles;
  return <View style={block} />;
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'red',
  },
});
