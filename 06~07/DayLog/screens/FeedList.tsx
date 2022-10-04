import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {LogTypes} from '../contexts/LogContext';
import FeedItem from './FeedItem';

interface ListProps {
  logs: LogTypes[];
}

const FeedList = ({logs}: ListProps) => {
  const {block, seperator} = styled;
  return (
    <FlatList
      data={logs}
      renderItem={({item}) => <FeedItem data={item} />}
      ItemSeparatorComponent={() => <View style={seperator} />}
      keyExtractor={({id}) => id}
      style={block}
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
