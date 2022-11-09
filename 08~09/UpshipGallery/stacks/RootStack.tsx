import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootParamList} from '../types/paramListTypes';
import ModifyScreen from '../screens/ModifyScreen';
import SettingScreen from '../screens/SettingScreen';
import SignInScreen from '../screens/SignInScreen';
import UploadScreen from '../screens/UploadScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainTab from './MainTab';
import {UserType, useUserContext} from '../contexts/userContext';
import {getUser} from '../lib/users';
import {subscribeAuth} from '../lib/auth';
import IconRightButton from '../components/molecules/IconRightButton';
const RootStack = () => {
  const Root = createNativeStackNavigator<RootParamList>();
  const {user, setUser} = useUserContext();

  useEffect(() => {
    const unsubscribe = subscribeAuth(async currentUser => {
      if (!currentUser) {
        return;
      }
      const profile = (await getUser(currentUser.uid)) as UserType;
      if (!profile) {
        return;
      }
      setUser(profile);
    });
    unsubscribe();
    return () => {};
  }, [setUser]);

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
      <Root.Screen
        name="upload"
        component={UploadScreen}
        options={{
          title: '새 게시물',
          headerBackTitle: '뒤로가기',
        }}
      />
      <Root.Screen
        name="modify"
        component={ModifyScreen}
        options={{
          title: '설명 수정',
          headerBackTitle: '뒤로가기',
        }}
      />
      <Root.Screen
        name="setting"
        component={SettingScreen}
        options={{
          title: '설정',
          headerBackTitle: '뒤로가기',
        }}
      />
    </Root.Navigator>
  );
};

export default RootStack;
