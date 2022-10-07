import {View, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';

import FeedList from './FeedList';

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

  return (
    <View style={block}>
      <FeedList logs={logs} setHidden={setHidden} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

const styled = StyleSheet.create({
  block: {flex: 1},
});

export default FeedsScreen;
