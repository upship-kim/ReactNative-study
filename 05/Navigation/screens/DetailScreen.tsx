import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;
const DetailScreen = () => {
  const navigate = useNavigation<ProfileScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();

  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>id : {route.params.id}</Text>
      <Button title="뒤로가기 " onPress={() => navigate.goBack()} />
    </View>
  );
};

export default DetailScreen;
