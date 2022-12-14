import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
interface AddTodoProps {
  onInsert: (text: string) => void;
}
const AddTodo = ({onInsert}: AddTodoProps) => {
  const {block, input, addIcon, androidButton} = styles;
  const [text, setText] = useState('');

  const handlePress = () => {
    if (!text.length) {
      return;
    }
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };

  const button = (
    <View style={addIcon}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  return (
    <View style={block}>
      <TextInput
        placeholder="할일을 입력하세요"
        style={input}
        autoCorrect={false}
        value={text}
        onChangeText={setText}
        returnKeyType="done"
        onSubmitEditing={handlePress}
      />
      {Platform.select({
        ios: (
          <TouchableOpacity onPress={handlePress}>{button}</TouchableOpacity>
        ),
        android: (
          <View style={androidButton}>
            <TouchableNativeFeedback onPress={handlePress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 8,
    fontSize: 16,
  },
  addIcon: {
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: '#26a69a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  androidButton: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});
