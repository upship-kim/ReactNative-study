import {Alert, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import LogContext from '../contexts/LogContext';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootParamList} from '../types/RootParamList';

type ContentTypes = {
  title: string;
  body: string;
};

const WriteScreen = () => {
  const navigate = useNavigation<NavigationProp<RootParamList, 'Write'>>();

  const {block, keyboard} = styled;

  const [content, setContent] = useState<ContentTypes>({
    title: '',
    body: '',
  });

  const {onCreate} = useContext(LogContext);

  const goBack = () => {
    navigate.goBack();
  };

  const onChange = (name: string, inputText: string) => {
    setContent({...content, [name]: inputText});
  };

  const onSave = () => {
    onCreate({...content, date: new Date()});
    Alert.alert('알림', '등록 되었습니다');
    goBack();
  };

  return (
    <SafeAreaView style={block}>
      <KeyboardAvoidingView
        style={keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} goBack={goBack} />
        <WriteEditor
          title={content.title}
          body={content.body}
          onChange={onChange}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styled = StyleSheet.create({
  block: {flex: 1},
  keyboard: {flex: 1},
});

export default WriteScreen;
