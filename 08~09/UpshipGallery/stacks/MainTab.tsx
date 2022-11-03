import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../types/paramListTypes';
import HomeStack from './HomeStack';
import MyProfileStack from './MyProfileStack';
import Icon from '../components/atoms/Icon';
import {StyleSheet, View} from 'react-native';
import CameraButton from '../components/molecules/CameraButton';

const MainTab = () => {
  const Bottom = createBottomTabNavigator<MainTabParamList>();

  return (
    <>
      <View style={styled.block}>
        <Bottom.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#6200ee',
          }}>
          <Bottom.Screen
            name="homeStack"
            component={HomeStack}
            options={{
              tabBarIcon: ({color}) => <Icon name="home" color={color} />,
            }}
          />
          <Bottom.Screen
            name="myProfileStack"
            component={MyProfileStack}
            options={{
              tabBarIcon: ({color}) => <Icon name="person" color={color} />,
            }}
          />
        </Bottom.Navigator>
      </View>
      <CameraButton />
    </>
  );
};

export default MainTab;
const styled = StyleSheet.create({
  block: {
    flex: 1,
    zIndex: 0,
  },
});
