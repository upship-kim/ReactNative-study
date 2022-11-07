import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyProfileParamList} from '../types/paramListTypes';
import MyProfileScreen from '../screens/MyProfileScreen';
import PostScreen from '../screens/PostScreen';

const MyProfileStack = () => {
  const ProfileStack = createNativeStackNavigator<MyProfileParamList>();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="myProfile" component={MyProfileScreen} />
      <ProfileStack.Screen name="post" component={PostScreen} />
    </ProfileStack.Navigator>
  );
};

export default MyProfileStack;
