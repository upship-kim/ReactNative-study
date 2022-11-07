import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React, {useMemo} from 'react';
import {PostTypes} from '../../lib/posts';
import Avatar from '../atoms/Avatar';
import {useNavigation} from '@react-navigation/native';
import {PostNavigateType} from '../../types/navigateTypes';

interface PostCardProps extends PostTypes {}

const PostCard = ({createdAt, description, photoURL, user}: PostCardProps) => {
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
  const navigation = useNavigation<PostNavigateType>();
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

  const onMoveProfile = () => {
    if (!user?.displayName || !user.id) {
      return;
    }

    navigation.navigate('profile', {
      displayName: user.displayName,
      userId: user.id,
    });
  };
  return (
    <View style={container}>
      <View style={head}>
        <Pressable style={profile} onPress={onMoveProfile}>
          <Avatar
            style={profileImage}
            source={user?.photoURL ? {uri: user.photoURL} : null}
          />
          <Text style={userText}>{user?.displayName}</Text>
        </Pressable>
      </View>
      <Image style={image} source={{uri: photoURL ?? ''}} />
      <View style={contents}>
        <Text style={descriptText}>{description}</Text>
        <Text style={dateText}>{convertDate}</Text>
      </View>
    </View>
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
