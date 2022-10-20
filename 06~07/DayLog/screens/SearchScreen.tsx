import {View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import SearchContext from '../contexts/SearchContext';
import LogContext from '../contexts/LogContext';

import FeedList from './FeedList';
import EmptySearchResult from '../components/EmptySearchResult';

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
      {filtered.length ? (
        <FeedList logs={filtered} />
      ) : (
        <EmptySearchResult
          type={keyword.length ? 'NOT_FOUND' : 'EMPTY_KEYWORD'}
        />
      )}
    </View>
  );
};

const styled = StyleSheet.create({block: {flex: 1}});

export default SearchScreen;
