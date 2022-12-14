import {View, Text, Button} from 'react-native';
import React from 'react';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../navigator/NativeStackNavigator';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'Detail'
>;
// type ProfileScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Detail'
// >;
const DetailScreen = () => {
  const navigate = useNavigation<ProfileScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();

  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>id : {route.params.id}</Text>
      <Button title="뒤로가기 " onPress={() => navigate.goBack()} />
      <Button
        title="다음 "
        onPress={() => navigate.navigate('Detail', {id: route.params.id + 1})}
      />
    </View>
  );
};

export default DetailScreen;
