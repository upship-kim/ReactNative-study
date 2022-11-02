import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootParamList} from '../types/paramListTypes';
import ModifyScreen from '../screens/ModifyScreen';
import SettingScreen from '../screens/SettingScreen';
import SignInScreen from '../screens/SignInScreen';
import UploadScreen from '../screens/UploadScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainTab from './MainTab';
import {useUserContext} from '../contexts/userContext';

const RootStack = () => {
  const Root = createNativeStackNavigator<RootParamList>();
  const {user} = useUserContext();
  return (
    <Root.Navigator initialRouteName="signIn">
      {user ? (
        <Root.Screen
          name="main"
          component={MainTab}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Root.Screen
            name="signIn"
            component={SignInScreen}
            initialParams={{isJoin: false}}
            options={{headerShown: false}}
          />
          <Root.Screen
            name="welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        </>
      )}
      <Root.Screen name="modify" component={ModifyScreen} />
      <Root.Screen name="setting" component={SettingScreen} />
      <Root.Screen name="upload" component={UploadScreen} />
    </Root.Navigator>
  );
};

export default RootStack;
