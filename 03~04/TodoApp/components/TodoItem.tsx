import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {TodoListTypes} from '../App';

interface TodoItemProps {
  item: TodoListTypes;
  onCheck: () => void;
}

const TodoItem = ({item, onCheck}: TodoItemProps) => {
  const {container, circle, textWrap, checkedCircle, checkedText} = styled;
  return (
    <TouchableOpacity onPress={onCheck}>
      <View style={container}>
        <View style={[circle, item.done && checkedCircle]}>
          <Image
            source={require('../assets/icons/check_white/check_white.png')}
          />
        </View>
        <Text style={[textWrap, item.done && checkedText]}>{item.text}</Text>
      </View>
    </TouchableOpacity>
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
  checkedCircle: {
    backgroundColor: '#26a69a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedText: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});
