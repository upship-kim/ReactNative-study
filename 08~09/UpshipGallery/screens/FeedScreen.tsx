import {View, Text} from 'react-native';
import React from 'react';
import {useUserContext} from '../contexts/userContext';

const FeedScreen = () => {
  const {user} = useUserContext();
  console.log(user);
  return (
    <View>
      <Text>{user.displayName}</Text>
      <Text>{(user.displayName, user.id)}</Text>
    </View>
  );
};

export default FeedScreen;
