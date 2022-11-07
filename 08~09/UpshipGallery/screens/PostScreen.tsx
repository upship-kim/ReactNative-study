import {View, StyleSheet} from 'react-native';
import React from 'react';
import PostCard from '../components/organisms/PostCard';
import {useRoute} from '@react-navigation/native';
import {PostRouteType} from '../types/navigateTypes';

const PostScreen = () => {
  const route = useRoute<PostRouteType>();
  const rest = route.params;
  const {container} = styled;
  return (
    <View style={container}>
      <PostCard {...rest} />
    </View>
  );
};

export default PostScreen;

const styled = StyleSheet.create({
  container: {flex: 1},
});
