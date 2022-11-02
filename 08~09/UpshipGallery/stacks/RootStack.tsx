import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootParamList} from '../types/paramListTypes';
import ModifyScreen from '../screens/ModifyScreen';
import SettingScreen from '../screens/SettingScreen';
import SignInScreen from '../screens/SignInScreen';
import UploadScreen from '../screens/UploadScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainTab from './MainTab';

const RootStack = () => {
  const Root = createNativeStackNavigator<RootParamList>();
  return (
    <Root.Navigator initialRouteName="signIn">
      <Root.Screen name="main" component={MainTab} />
      <Root.Screen name="modify" component={ModifyScreen} />
      <Root.Screen name="setting" component={SettingScreen} />
      <Root.Screen
        name="signIn"
        component={SignInScreen}
        initialParams={{isJoin: false}}
        options={{headerShown: false}}
      />
      <Root.Screen name="upload" component={UploadScreen} />
      <Root.Screen name="welcome" component={WelcomeScreen} />
    </Root.Navigator>
  );
};

export default RootStack;
