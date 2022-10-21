import {View, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';

import FeedList from './FeedList';
import {he} from 'date-fns/locale';

type BottomTabNavigateTypes = BottomTabNavigationProp<
  BottomTabParamList,
  'Feeds'
>;
type BottomTabRouteTypes = RouteProp<BottomTabParamList, 'Feeds'>;

const FeedsScreen = () => {
  const navigate = useNavigation<BottomTabNavigateTypes>();
  const route = useRoute<BottomTabRouteTypes>();
  const [hidden, setHidden] = useState(false);
  const {logs} = useContext(LogContext);
  const {block} = styled;

  const onScrolledToBottom = (isBottom: boolean) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} forceView={logs.length !== 8} />
    </View>
  );
};

const styled = StyleSheet.create({
  block: {flex: 1},
});

export default FeedsScreen;
