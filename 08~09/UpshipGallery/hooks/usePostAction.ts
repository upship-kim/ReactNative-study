import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActionSheetIOS, Platform, Alert} from 'react-native';
import events from '../lib/event';
import {deletePost} from '../lib/posts';
import {
  HomePostNavigateType,
  ModifyNavigateType,
  MyProfilePostNavigateType,
} from '../types/navigateTypes';

type MergeNavigationType = CompositeNavigationProp<
  HomePostNavigateType,
  CompositeNavigationProp<MyProfilePostNavigateType, ModifyNavigateType>
>;
interface UsePostActionProps {
  id: string;
  description: string;
}

const usePostAction = ({description, id}: UsePostActionProps) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const navigation = useNavigation<MergeNavigationType>();

  const onPressMore = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['설명 수정', '게시물 삭제', '취소'],
          cancelButtonIndex: 2,
          destructiveButtonIndex: 1,
        },
        buttonIndex => {
          switch (buttonIndex) {
            case 0:
              onEditDescript();
              return;
            case 1:
              onDeleteContent();
              return;

            default:
              return;
          }
        },
      );
      return;
    }
    if (isModalShow) {
      setIsModalShow(false);
      return;
    }
    setIsModalShow(true);
  };
  const onEditDescript = () => {
    navigation.navigate('modify', {id, description});
  };

  const onDeleteContent = async () => {
    Alert.alert('게시물 삭제', '게시물을 삭제하시겠습니까?', [
      {
        text: '확인',
        onPress: async () => {
          try {
            await deletePost({id});
            events.removePost(id);
          } catch (e) {
            console.log(e);
          }
        },
      },
      {
        text: '취소',
        onPress: () => {},
      },
    ]);
    setIsModalShow(false);
  };

  const androidActions = [
    {
      icon: 'edit',
      text: '설명 수정',
      onPress: onEditDescript,
    },
    {
      icon: 'delete',
      text: '게시물 삭제',
      onPress: onDeleteContent,
    },
  ];

  return {
    onPressMore,
    onDeleteContent,
    onEditDescript,
    isModalShow,
    androidActions,
  };
};

export default usePostAction;
