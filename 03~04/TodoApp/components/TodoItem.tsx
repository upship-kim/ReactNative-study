import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TodoListTypes} from '../App';

interface TodoItemProps {
  item: TodoListTypes;
}

const TodoItem = ({item}: TodoItemProps) => {
  const {container, circle, textWrap} = styled;
  return (
    <View style={container}>
      <View style={circle} />
      <Text style={textWrap}>{item.text}</Text>
    </View>
  );
};

export default TodoItem;

const styled = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    borderRadius: 24,
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#26a69a',
    marginRight: 10,
  },
  textWrap: {
    fontSize: 16,
    flex: 1,
    color: '#212121',
  },
});
