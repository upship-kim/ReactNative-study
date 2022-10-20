import {View, Text, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import React, {useContext} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import SearchContext from '../contexts/SearchContext';
import LogContext, {LogTypes} from '../contexts/LogContext';
import FeedListItem from './FeedListItem';

type BottomTabNavigateTypes = BottomTabNavigationProp<
  BottomTabParamList,
  'Search'
>;
type BottomTabRouteTypes = RouteProp<BottomTabParamList, 'Search'>;

const SearchScreen = () => {
  const navigate = useNavigation<BottomTabNavigateTypes>();
  const route = useRoute<BottomTabRouteTypes>();
  const {logs} = useContext(LogContext);
  const {keyword} = useContext(SearchContext);
  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text =>
            text.toLowerCase().includes(keyword.toLowerCase()),
          ),
        );
  const {block} = styled;

  return (
    <View style={block}>
      <FlatList
        data={filtered}
        renderItem={({item}) => <FeedListItem log={item} />}
      />
    </View>
  );
};

const styled = StyleSheet.create({block: {}});

export default SearchScreen;
