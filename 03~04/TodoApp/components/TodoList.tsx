import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {TodoListTypes} from '../App';

interface TodoListProps {
  todoList: TodoListTypes[];
}

const TodoList = ({todoList}: TodoListProps) => {
  return (
    <FlatList
      data={todoList}
      keyExtractor={({id}) => String(id)}
      renderItem={({item}) => {
        return (
          <View>
            <Text>{item.text}</Text>
          </View>
        );
      }}
    />
  );
};

export default TodoList;
