import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  getNewerPosts,
  getOlderPosts,
  getPosts,
  PAGE_SIZE,
  PostTypes,
} from '../lib/posts';

const usePosts = (userId?: string) => {
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
        const response = await getPosts({userId});
        setPosts(response);
      } catch (e) {
        console.log(e);
      }
    })();
    return () => {};
  }, []);
  return {posts, refreshing, noMorePost, onRefresh, onLoadMore};
};

export default usePosts;
