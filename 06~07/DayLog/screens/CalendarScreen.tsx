import {View, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import CaledarView from './CaledarView';
import LogContext from '../contexts/LogContext';
import {format} from 'date-fns';

type BottomTabNavigateTypes = BottomTabNavigationProp<
  BottomTabParamList,
  'Calendar'
>;
type BottomTabRouteTypes = RouteProp<BottomTabParamList, 'Calendar'>;

const CalendarScreen = () => {
  const navigate = useNavigation<BottomTabNavigateTypes>();
  const route = useRoute<BottomTabRouteTypes>();
  const {logs} = useContext(LogContext);

  const markedDates = logs.reduce((prev, cur) => {
    const formattedDate = format(new Date(cur.date), 'yyyy-MM-dd');

    return {...prev, [formattedDate]: {marked: true}};
  }, {});
  console.log(markedDates);
  const {block} = styled;
  return (
    <View style={block}>
      <CaledarView markedDates={markedDates} />
    </View>
  );
};

const styled = StyleSheet.create({block: {}});

export default CalendarScreen;
