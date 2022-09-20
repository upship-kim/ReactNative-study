import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {TodoListTypes} from '../App';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: TodoListTypes[];
  onCheck: (id: number) => void;
}

const TodoList = ({todoList, onCheck}: TodoListProps) => {
  return (
    <FlatList
      data={todoList}
      ItemSeparatorComponent={() => <View style={style.seperator} />}
      keyExtractor={({id}) => String(id)}
      renderItem={({item}) => (
        <TodoItem item={item} onCheck={() => onCheck(item.id)} />
      )}
    />
  );
};

export default TodoList;

const style = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});
