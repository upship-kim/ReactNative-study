import React, {useState} from 'react';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import TodoList from './components/TodoList';

export type TodoListTypes = {
  id: number;
  text: string;
  done: boolean;
};

const App = () => {
  const [todoList, setTodoList] = useState<TodoListTypes[]>([]);
  const [insertId, setInsertId] = useState(0);
  const handleChange = {
    onInsert: (text: string) => {
      setTodoList(
        todoList.concat({
          id: insertId,
          text: text,
          done: false,
        }),
      );
      setInsertId(prev => prev + 1);
    },
    onChange: (id: number) => {
      setTodoList(
        todoList.map(item =>
          item.id === id ? {...item, done: !item.done} : item,
        ),
      );
    },
    onDelete: (id: number) => {
      setTodoList(todoList.filter(item => item.id !== id));
    },
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardAvoid}>
          <DateHead currentDate={new Date()} />
          {todoList.length ? (
            <TodoList todoList={todoList} onCheck={handleChange.onChange} />
          ) : (
            <Empty />
          )}
          <AddTodo onInsert={handleChange.onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  keyboardAvoid: {flex: 1},
});
