import {useCallback, useEffect, useState} from 'react';
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

  const onRefresh = useCallback(async () => {
    if (!posts || !posts.length || refreshing) {
      return;
    }

    try {
      await onFetching();
      const firstPost = posts[0];
      setRefreshing(true);
      const newerPosts = await getNewerPosts(firstPost.id, userId);
      console.log(newerPosts);
      setRefreshing(false);
      if (!newerPosts.length) {
        return;
      }

      setPosts(newerPosts.concat(posts));
    } catch (e) {
      console.log(e);
    }
  }, [posts, refreshing, userId]);

  const onFetching = async () => {
    try {
      const response = await getPosts({userId});
      setPosts(response);
    } catch (e) {
      console.log(e);
    }
  };

  const onRemove = useCallback(
    (postId: string) => {
      setPosts(posts.filter(item => item.id !== postId));
    },
    [posts],
  );

  useEffect(() => {
    onFetching();
    return () => {};
  }, []);
  return {
    posts,
    refreshing,
    noMorePost,
    onRefresh,
    onLoadMore,
    onFetching,
    onRemove,
  };
};

export default usePosts;
