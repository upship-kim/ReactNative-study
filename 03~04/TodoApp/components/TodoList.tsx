import {FlatList} from 'react-native';
import React from 'react';
import {TodoListTypes} from '../App';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: TodoListTypes[];
}

const TodoList = ({todoList}: TodoListProps) => {
  return (
    <FlatList
      data={todoList}
      keyExtractor={({id}) => String(id)}
      renderItem={({item}) => <TodoItem item={item} />}
    />
  );
};

export default TodoList;
