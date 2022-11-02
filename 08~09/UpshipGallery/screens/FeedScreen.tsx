import {View, Text} from 'react-native';
import React from 'react';
import {useUserContext} from '../contexts/userContext';
import {SafeAreaView} from 'react-native-safe-area-context';

const FeedScreen = () => {
  const {user} = useUserContext();

  return (
    <SafeAreaView>
      <Text>{user && user.displayName}</Text>
      <Text>{(user && user.displayName, user && user.id)}</Text>
    </SafeAreaView>
  );
};

export default FeedScreen;
