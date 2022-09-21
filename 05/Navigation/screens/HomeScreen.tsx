import {View, Button} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigator/NativeStackNavigator';
// import {DrawerNavigationProp} from '@react-navigation/drawer';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
// type ProfileScreenNavigationProp = DrawerNavigationProp<
//   RootStackParamList,
//   'Home'
// >;

const HomeScreen = () => {
  const navigate = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View>
      <Button
        title="Drawer 열기 "
        // onPress={() => navigate.push('Detail', {id: 112})}
        onPress={() => navigate.navigate('Detail', {id: 200})}
      />
    </View>
  );
};

export default HomeScreen;
