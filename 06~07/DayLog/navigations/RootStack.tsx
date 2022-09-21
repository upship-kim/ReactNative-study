import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootParamList} from '../types/RootParamList';
import WriteScreen from '../screens/WriteScreen';
import MainTab from './MainTab';

const RootStack = () => {
  const Root = createNativeStackNavigator<RootParamList>();
  return (
    <Root.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
      <Root.Screen name="Main" component={MainTab} />
      <Root.Screen name="Write" component={WriteScreen} />
    </Root.Navigator>
  );
};

export default RootStack;
