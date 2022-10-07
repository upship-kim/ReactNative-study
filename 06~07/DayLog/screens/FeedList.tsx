import {
  View,
  StyleSheet,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React from 'react';
import {LogTypes} from '../contexts/LogContext';
import FeedItem from './FeedItem';

interface ListProps {
  logs: LogTypes[];
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedList = ({logs, setHidden}: ListProps) => {
  const {block, seperator} = styled;
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;

    const canButtonView =
      contentSize.height - (layoutMeasurement.height + contentOffset.y) < 72;

    canButtonView ? setHidden(false) : setHidden(true);
  };
  return (
    <FlatList
      data={logs}
      renderItem={({item}) => <FeedItem data={item} />}
      ItemSeparatorComponent={() => <View style={seperator} />}
      keyExtractor={({id}) => id}
      style={block}
      // onEndReached={({distanceFromEnd}) => {
      //   console.log(distanceFromEnd, 'near end');
      // }}
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
