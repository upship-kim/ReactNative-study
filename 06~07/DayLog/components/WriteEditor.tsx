import {View, StyleSheet, TextInput} from 'react-native';
import React, {useRef} from 'react';

interface EditorProps {
  title: string;
  body: string;
  onChange: (name: string, text: string) => void;
}

const WriteEditor = ({body, onChange, title}: EditorProps) => {
  const {container, blockBody, blockTitle} = style;
  const bodyRef = useRef<TextInput>(null);

  return (
    <View style={container}>
      <TextInput
        value={title}
        onChangeText={e => onChange('title', e)}
        style={blockTitle}
        placeholder="제목을 입력해주세요"
        placeholderTextColor={'gray'}
        onSubmitEditing={() => {
          if (bodyRef.current) {
            bodyRef.current.focus();
          }
        }}
      />
      <TextInput
        style={blockBody}
        value={body}
        multiline
        textAlignVertical="top"
        placeholder="당신의 오늘을 기록해보세요"
        onChangeText={e => onChange('body', e)}
        ref={bodyRef}
      />
    </View>
  );
};

export default WriteEditor;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  blockTitle: {
    fontSize: 24,
    padding: 4,
    marginVertical: 12,
  },
  blockBody: {
    fontSize: 12,
    padding: 4,
    flex: 1,
  },
});
