import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../types/paramListTypes';
import HomeStack from './HomeStack';
import MyProfileStack from './MyProfileStack';

const MainTab = () => {
  const Bottom = createBottomTabNavigator<MainTabParamList>();
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="home" component={HomeStack} />
      <Bottom.Screen name="myProfile" component={MyProfileStack} />
    </Bottom.Navigator>
  );
};

export default MainTab;
