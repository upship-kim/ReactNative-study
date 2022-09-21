import {View, Button} from 'react-native';
import React from 'react';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigator/NativeStackNavigator';
// import {DrawerNavigationProp} from '@react-navigation/drawer';

type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'Home'
>;
// type ProfileScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Home'
// >;
// type ProfileScreenNavigationProp = DrawerNavigationProp<
//   RootStackParamList,
//   'Home'
// >;

const HomeScreen = () => {
  const navigate = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View>
      <Button
        title="Detail "
        // onPress={() => navigate.push('Detail', {id: 112})}
        onPress={() => navigate.navigate('Detail', {id: 200})}
      />
    </View>
  );
};

export default HomeScreen;
