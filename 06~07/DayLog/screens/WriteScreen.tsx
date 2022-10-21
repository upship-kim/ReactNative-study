import {Alert, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import LogContext from '../contexts/LogContext';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootParamList} from '../types/RootParamList';

type ContentTypes = {
  title: string;
  body: string;
};

const WriteScreen = () => {
  const navigate = useNavigation<NavigationProp<RootParamList, 'Write'>>();
  const {params} = useRoute<RouteProp<RootParamList, 'Write'>>();
  const {block, keyboard} = styled;
  const [content, setContent] = useState<ContentTypes>({
    title: params?.title || '',
    body: params?.body || '',
  });
  const [date, setDate] = useState(
    params ? new Date(params?.date) : new Date(),
  );

  const {onCreate, onDelete, onModify} = useContext(LogContext);

  const goBack = () => {
    navigate.goBack();
  };

  const onChange = (name: string, inputText: string) => {
    setContent({...content, [name]: inputText});
  };

  const onSave = () => {
    if (params?.id) {
      onModify({...params, ...content, date: date.toISOString()});
      Alert.alert('알림', '수정 되었습니다');
      goBack();
      return;
    }
    onCreate({...content, date: date.toISOString()});
    Alert.alert('알림', '등록 되었습니다');
    goBack();
  };

  const onAskRemove = () => {
    Alert.alert('삭제', '정말로 삭제하시겠어요?', [
      {text: '취소', style: 'cancel'},
      {
        text: '삭제',
        style: 'destructive',
        onPress: () => {
          if (!params?.id) {
            goBack();
            return;
          }
          onDelete({id: params.id});
          goBack();
        },
      },
    ]);
  };

  const onChangeDate = (selectedDate: Date) => {
    setDate(selectedDate);
  };

  return (
    <SafeAreaView style={block}>
      <KeyboardAvoidingView
        style={keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          selectedDate={date}
          goBack={goBack}
          onAskRemove={onAskRemove}
          onChangeDate={onChangeDate}
        />
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
