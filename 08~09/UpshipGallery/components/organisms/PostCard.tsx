import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {deletePost, PostTypes} from '../../lib/posts';
import Avatar from '../atoms/Avatar';
import {
  CompositeNavigationProp,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import {
  HomePostNavigateType,
  ModifyNavigateType,
  MyProfilePostNavigateType,
} from '../../types/navigateTypes';
import {MainTabParamList} from '../../types/paramListTypes';
import {useUserContext} from '../../contexts/userContext';
import Icon from '../atoms/Icon';
import MenuModal from './MenuModal';
import usePostAction from '../../hooks/usePostAction';

interface PostCardProps extends PostTypes {}

const PostCard = ({
  createdAt,
  description,
  photoURL,
  user,
  id,
}: PostCardProps) => {
  const {
    container,
    head,
    contents,
    profile,
    profileImage,
    userText,
    image,
    descriptText,
    dateText,
  } = styled;

  type MergeNavigationType = CompositeNavigationProp<
    HomePostNavigateType,
    CompositeNavigationProp<MyProfilePostNavigateType, ModifyNavigateType>
  >;

  const routeName = useNavigationState<MainTabParamList, unknown>(
    state => state.routeNames,
  );
  const {user: me} = useUserContext();
  const isMyProfilePost = (routeName as string[]).includes('myProfile');

  const navigation = useNavigation<MergeNavigationType>();
  const {isModalShow, onPressMore, androidActions} = usePostAction({
    id,
    description,
  });

  const convertDate = useMemo(
    () =>
      createdAt.seconds
        ? new Date(Number(createdAt.seconds) * 1000).toLocaleString('ko', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })
        : new Date().toLocaleString('ko'),
    [createdAt.seconds],
  );
  const isMe = me && user ? me.id === user.id : false;

  const onMoveProfile = () => {
    if (!user?.displayName || !user.id) {
      return;
    }
    if (isMyProfilePost) {
      navigation.navigate('myProfile');
    }
    navigation.navigate('profile', {
      displayName: user.displayName,
      userId: user.id,
    });
  };

  return (
    <>
      <View style={container}>
        <View style={head}>
          <Pressable style={profile} onPress={onMoveProfile}>
            <Avatar
              style={profileImage}
              source={user?.photoURL ? {uri: user.photoURL} : null}
            />
            <Text style={userText}>{user?.displayName}</Text>
          </Pressable>
          {isMe && (
            <Pressable hitSlop={8} onPress={onPressMore}>
              <Icon name="more-vert" />
            </Pressable>
          )}
        </View>
        <Image style={image} source={{uri: photoURL ?? ''}} />
        <View style={contents}>
          <Text style={descriptText}>{description}</Text>
          <Text style={dateText}>{convertDate}</Text>
        </View>
      </View>
      {isModalShow && (
        <MenuModal
          modalVisible={isModalShow}
          onModalClose={onPressMore}
          actions={androidActions}
        />
      )}
    </>
  );
};

export default PostCard;
const styled = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 14,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },

  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  userText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
    fontWeight: '600',
  },
  image: {
    aspectRatio: 1,
  },
  contents: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  descriptText: {
    color: '#4b4b4b',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  dateText: {
    color: '#757575',
    fontSize: 12,
    lineHeight: 18,
  },
});
