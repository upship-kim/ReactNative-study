import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type BottomTabNavigateTypes = BottomTabNavigationProp<
  BottomTabParamList,
  'Calendar'
>;
type BottomTabRouteTypes = RouteProp<BottomTabParamList, 'Calendar'>;

const CalendarScreen = () => {
  const navigate = useNavigation<BottomTabNavigateTypes>();
  const route = useRoute<BottomTabRouteTypes>();

  const {block} = styled;
  return (
    <View style={block}>
      <Text>CalendarScreen</Text>
    </View>
  );
};

const styled = StyleSheet.create({block: {}});

export default CalendarScreen;
