import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {TodoListTypes} from '../App';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface TodoItemProps {
  item: TodoListTypes;
  onCheck: () => void;
  onDelete: () => void;
}

const TodoItem = ({item, onCheck, onDelete}: TodoItemProps) => {
  const handleRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제 하시겠어요?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {text: '삭제', onPress: onDelete, style: 'destructive'},
      ],
      {cancelable: true, onDismiss: () => {}},
    );
  };
  const {container, circle, textWrap, checkedCircle, checkedText, blankView} =
    styled;
  return (
    <TouchableOpacity onPress={onCheck}>
      <View style={container}>
        <View style={[circle, item.done && checkedCircle]}>
          <Image
            source={require('../assets/icons/check_white/check_white.png')}
          />
        </View>
        <Text style={[textWrap, item.done && checkedText]}>{item.text}</Text>
        {item.done ? (
          <Icon
            name="delete"
            size={32}
            color="#ff7ea5"
            onPress={handleRemove}
          />
        ) : (
          <View style={blankView} />
        )}
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
  blankView: {
    width: 32,
    height: 32,
  },
});
