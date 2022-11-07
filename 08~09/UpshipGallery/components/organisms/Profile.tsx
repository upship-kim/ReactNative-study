import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UserType} from '../../contexts/userContext';
import {getPosts, PostTypes} from '../../lib/posts';
import {getUser} from '../../lib/users';
import Loading from '../atoms/Loading';
import Avatar from '../atoms/Avatar';

interface ProfileProps {
  userId: string;
}

const Profile = ({userId}: ProfileProps) => {
  const [user, setUser] = useState<UserType>(null);
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const {spinner, avatar, block, userInfo, username} = styled;

  useEffect(() => {
    (async () => {
      try {
        const fetchUser = await getUser(userId);
        const fetchPosts = await getPosts({userId: userId});

        if (fetchUser) {
          setUser(fetchUser);
        }
        if (fetchPosts) {
          setPosts(fetchPosts);
        }
      } catch (e) {
        console.error(e);
      }
    })();

    return () => {};
  }, [userId]);

  if (!user || !posts.length) {
    return <Loading style={spinner} />;
  }

  return (
    <FlatList
      style={block}
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
      renderItem={() => {
        return (
          <View>
            <Text>asdfasdf</Text>
          </View>
        );
      }}
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
