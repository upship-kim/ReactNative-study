import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';

const AddTodo = () => {
  const {block, input, addIcon, androidButton} = styles;
  const button = (
    <View style={addIcon}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  return (
    <View style={block}>
      <TextInput placeholder="할일을 입력하세요" style={input} />
      {Platform.select({
        ios: <TouchableOpacity>{button}</TouchableOpacity>,
        android: (
          <View style={androidButton}>
            <TouchableNativeFeedback>{button}</TouchableNativeFeedback>
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
