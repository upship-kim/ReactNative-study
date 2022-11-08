import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {ModifyNavigateType, ModifyRouteType} from '../types/navigateTypes';
import {useNavigation, useRoute} from '@react-navigation/native';

import Input from '../components/atoms/Input';
import IconRightButton from '../components/molecules/IconRightButton';
import {updatePost} from '../lib/posts';

const ModifyScreen = () => {
  const navigate = useNavigation<ModifyNavigateType>();
  const {params} = useRoute<ModifyRouteType>();
  const {description, id} = params || {};

  const {container, input} = styled;

  const [editDescription, setEditDescription] = useState<string>(description);

  const onSubmit = useCallback(async () => {
    Alert.alert('설명 수정', '설명 글을 수정하시곘습니까?', [
      {text: '취소', onPress: () => {}},
      {
        text: '수정',
        onPress: async () => {
          try {
            const response = await updatePost({
              id,
              description: editDescription,
            });
            console.log(response);

            navigate.pop();
          } catch (e) {
            console.log(e);
          }
        },
      },
    ]);
  }, [editDescription, id, navigate]);

  useEffect(() => {
    navigate.setOptions({
      title: '설명 수정',
      headerRight: () => (
        <IconRightButton name="check" color="#6200ee" onPress={onSubmit} />
      ),
    });
    return () => {};
  }, [description, navigate, onSubmit]);

  return (
    <KeyboardAvoidingView
      style={container}
      behavior={(Platform.OS === 'ios' && 'height') || undefined}
      keyboardVerticalOffset={Platform.select({ios: 180})}>
      <View style={container}>
        <Input
          multiline
          style={input}
          placeholder="이 사진에 대한 설명을 입력하세요."
          textAlignVertical="top"
          value={editDescription}
          onChangeText={setEditDescription}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ModifyScreen;

const styled = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  input: {
    flex: 1,
    padding: 15,
    backgroundColor: '#e7e7e7',
  },
});
