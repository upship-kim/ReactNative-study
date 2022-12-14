import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeParamList} from '../types/paramListTypes';
import ProfileScreen from '../screens/ProfileScreen';
import PostScreen from '../screens/PostScreen';
import FeedScreen from '../screens/FeedScreen';

const HomeStack = () => {
  const HomeStacks = createNativeStackNavigator<HomeParamList>();
  return (
    <HomeStacks.Navigator>
      <HomeStacks.Screen name="feed" component={FeedScreen} />
      <HomeStacks.Screen
        name="post"
        component={PostScreen}
        options={{title: '게시물'}}
      />
      <HomeStacks.Screen name="profile" component={ProfileScreen} />
    </HomeStacks.Navigator>
  );
};

export default HomeStack;
