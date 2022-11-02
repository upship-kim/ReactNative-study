import {View, Text, Image} from 'react-native';
import React from 'react';
import {useUserContext} from '../contexts/userContext';
import {SafeAreaView} from 'react-native-safe-area-context';

const FeedScreen = () => {
  const {user} = useUserContext();

  return (
    <SafeAreaView>
      <Text>{user && user.displayName}</Text>
      <Text>{(user && user.displayName, user && user.id)}</Text>
      {user?.photoURL && (
        <Image
          style={{width: 150, height: 150}}
          source={{uri: user.photoURL}}
        />
      )}
    </SafeAreaView>
  );
};

export default FeedScreen;
