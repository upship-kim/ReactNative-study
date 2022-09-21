import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import LogContext from '../contexts/LogContext';

type BottomTabNavigateTypes = BottomTabNavigationProp<
  BottomTabParamList,
  'Feeds'
>;
type BottomTabRouteTypes = RouteProp<BottomTabParamList, 'Feeds'>;

const FeedsScreen = () => {
  const navigate = useNavigation<BottomTabNavigateTypes>();
  const route = useRoute<BottomTabRouteTypes>();
  const {block} = styled;
  return (
    <View style={block}>
      <LogContext.Consumer>{value => <Text>{value}</Text>}</LogContext.Consumer>
    </View>
  );
};

const styled = StyleSheet.create({block: {}});

export default FeedsScreen;
