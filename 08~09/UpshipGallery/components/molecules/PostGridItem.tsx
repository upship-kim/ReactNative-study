import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {PostTypes} from '../../lib/posts';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigateType} from '../../types/navigateTypes';

interface PostGridItemProps {
  post: PostTypes;
}

const PostGridItem = ({post}: PostGridItemProps) => {
  const dimenstions = useWindowDimensions();
  const size = dimenstions.width / 3;
  const navigation = useNavigation<ProfileNavigateType>();

  const {container, image} = styled;

  const onPress = () => {
    //TODO:단일 포스트 조회 화면 띄우기
    navigation.navigate('post', post);
  };
  if (!post.photoURL) return null;
  return (
    <Pressable style={container} onPress={onPress}>
      <Image
        source={{uri: post.photoURL}}
        style={[image, size ? {width: size, height: size} : {}]}
        resizeMode="cover"
        resizeMethod="resize"
      />
    </Pressable>
  );
};

export default PostGridItem;

const styled = StyleSheet.create({
  container: {margin: 0.5},
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    height: '100%',
  },
});
