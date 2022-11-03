import React, {useEffect, useState} from 'react';
import {useUserContext} from '../contexts/userContext';

import PostCard from '../components/organisms/PostCard';
import {
  getPosts,
  PostTypes,
  PAGE_SIZE,
  getOlderPosts,
  getNewerPosts,
} from '../lib/posts';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const FeedScreen = () => {
  const {user} = useUserContext();
  const {container, seperate, spinner} = styled;
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [noMorePost, setNoMorePost] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onLoadMore = async () => {
    if (noMorePost || !posts.length || posts.length < PAGE_SIZE) {
      return;
    }
    try {
      const lastPost = posts[posts.length - 1];
      const olderPosts = await getOlderPosts(lastPost.id);
      if (olderPosts.length < PAGE_SIZE) {
        setNoMorePost(true);
      }
      setPosts(posts.concat(olderPosts));
    } catch (e) {
      console.log(e);
    }
  };

  const onRefresh = async () => {
    if (refreshing || !posts.length) {
      return;
    }

    try {
      const firstPost = posts[0];
      const newerPosts = await getNewerPosts(firstPost.id);
      if (!newerPosts.length) {
        return;
      }
      setPosts(newerPosts.concat(posts));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await getPosts();
        setPosts(response);
      } catch (e) {
        console.log(e);
      }
    })();
    return () => {};
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <PostCard {...item} />}
      keyExtractor={({id}) => id}
      ItemSeparatorComponent={() => <View style={seperate} />}
      contentContainerStyle={container}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.75}
      ListEmptyComponent={
        !noMorePost ? (
          <ActivityIndicator style={spinner} size={32} color="#6200ee" />
        ) : null
      }
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
