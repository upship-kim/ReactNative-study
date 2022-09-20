import {View, Button} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigate = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View>
      <Button
        title="Detail 열기 "
        onPress={() => navigate.push('Detail', {id: 112})}
      />
    </View>
  );
};

export default HomeScreen;
