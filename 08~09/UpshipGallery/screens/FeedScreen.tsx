import React from 'react';

import PostCard from '../components/organisms/PostCard';

import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import Loading from '../components/atoms/Loading';
import usePosts from '../hooks/usePosts';

const FeedScreen = () => {
  const {container, seperate, spinner} = styled;
  const {noMorePost, onLoadMore, onRefresh, posts, refreshing} = usePosts();

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <PostCard {...item} />}
      keyExtractor={({id}) => id}
      ItemSeparatorComponent={() => <View style={seperate} />}
      contentContainerStyle={container}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.75}
      ListEmptyComponent={!noMorePost ? <Loading style={spinner} /> : null}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default FeedScreen;

const styled = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  spinner: {
    height: 64,
  },
  seperate: {
    height: 1,
    backgroundColor: '#e3e3e3',
  },
});
