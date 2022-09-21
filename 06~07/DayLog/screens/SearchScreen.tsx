import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

type BottomTabNavigateTypes = BottomTabNavigationProp<
  BottomTabParamList,
  'Search'
>;
type BottomTabRouteTypes = RouteProp<BottomTabParamList, 'Search'>;

const SearchScreen = () => {
  const navigate = useNavigation<BottomTabNavigateTypes>();
  const route = useRoute<BottomTabRouteTypes>();

  const {block} = styled;
  return (
    <View style={block}>
      <Text>SearchScreen</Text>
    </View>
  );
};

const styled = StyleSheet.create({block: {}});

export default SearchScreen;
