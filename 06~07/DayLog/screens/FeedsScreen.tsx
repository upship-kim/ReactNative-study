import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useContext} from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import FeedItem from './FeedItem';

type BottomTabNavigateTypes = BottomTabNavigationProp<
  BottomTabParamList,
  'Feeds'
>;
type BottomTabRouteTypes = RouteProp<BottomTabParamList, 'Feeds'>;

const FeedsScreen = () => {
  const navigate = useNavigation<BottomTabNavigateTypes>();
  const route = useRoute<BottomTabRouteTypes>();

  const {logs} = useContext(LogContext);
  const {block} = styled;

  return (
    <View style={block}>
      <FlatList data={logs} renderItem={({item}) => <FeedItem data={item} />} />
      <FloatingWriteButton />
    </View>
  );
};

const styled = StyleSheet.create({
  block: {flex: 1},
  box: {
    borderWidth: 2,
    padding: 16,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default FeedsScreen;
