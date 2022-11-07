import {View, Text, FlatList, StyleSheet, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UserType} from '../../contexts/userContext';
import {PostTypes} from '../../lib/posts';

import Loading from '../atoms/Loading';
import Avatar from '../atoms/Avatar';
import PostGridItem from '../molecules/PostGridItem';
import usePosts from '../../hooks/usePosts';
import {getUser} from '../../lib/users';

interface ProfileProps {
  userId: string;
}

const Profile = ({userId}: ProfileProps) => {
  const [user, setUser] = useState<UserType>(null);

  const {spinner, avatar, block, userInfo, username} = styled;
  const {noMorePost, onLoadMore, onRefresh, posts, refreshing} =
    usePosts(userId);

  useEffect(() => {
    (async () => {
      try {
        const fetchUser = await getUser(userId);

        if (fetchUser) {
          setUser(fetchUser);
        }
      } catch (e) {
        console.error(e);
      }
    })();

    return () => {};
  }, [userId]);

  const renderItem = (props: PostTypes) => {
    return <PostGridItem post={props} />;
  };

  if (!user || !posts.length) {
    return <Loading style={spinner} />;
  }

  return (
    <FlatList
      style={block}
      numColumns={3}
      ListHeaderComponent={
        <View style={userInfo}>
          <Avatar
            source={user.photoURL ? {uri: user.photoURL} : null}
            style={avatar}
            size={128}
          />
          <Text style={username}>{user.displayName}</Text>
        </View>
      }
      data={posts}
      keyExtractor={({id}) => id}
      renderItem={({item}) => renderItem(item)}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.75}
      ListEmptyComponent={!noMorePost ? <Loading style={spinner} /> : null}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default Profile;

const styled = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
  block: {flex: 1},
  userInfo: {
    paddingTop: 80,
    paddingBottom: 64,
    alignItems: 'center',
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  username: {
    marginTop: 8,
    fontSize: 24,
    color: '#424242',
  },
});
