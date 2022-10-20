import {
  View,
  StyleSheet,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React from 'react';
import {LogTypes} from '../contexts/LogContext';
import FeedItem from './FeedListItem';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/BottomTabParamList';

interface ListProps {
  logs: LogTypes[];
  onScrolledToBottom: (isBottom: boolean) => void;
}
type BottomTabNavigateTypes = BottomTabNavigationProp<
  BottomTabParamList,
  'Feeds'
>;
const FeedList = ({logs, onScrolledToBottom}: ListProps) => {
  const {block, seperator} = styled;

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!onScrolledToBottom) {
      return;
    }
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;

    const distanceFromBottom =
      contentSize.height - (layoutMeasurement.height + contentOffset.y);

    onScrolledToBottom(distanceFromBottom > 72);
  };
  return (
    <FlatList
      data={logs}
      renderItem={({item}) => <FeedItem log={item} />}
      ItemSeparatorComponent={() => <View style={seperator} />}
      keyExtractor={({id}) => id}
      style={block}
      onScroll={onScroll}
    />
  );
};

export default FeedList;
const styled = StyleSheet.create({
  block: {flex: 1},
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#e3e3e3',
  },
});
