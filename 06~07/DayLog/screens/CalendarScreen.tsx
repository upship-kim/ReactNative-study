import {View, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import CaledarView from './CaledarView';
import LogContext from '../contexts/LogContext';
import {format} from 'date-fns';
import FeedList from './FeedList';
import {useMemo} from 'react';

type BottomTabNavigateTypes = BottomTabNavigationProp<
  BottomTabParamList,
  'Calendar'
>;
type BottomTabRouteTypes = RouteProp<BottomTabParamList, 'Calendar'>;

const CalendarScreen = () => {
  const navigate = useNavigation<BottomTabNavigateTypes>();
  const route = useRoute<BottomTabRouteTypes>();
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  // const data: {[index: string]: any} = logs.slice();

  const markedDates = useMemo(
    () =>
      logs.reduce((prev, cur) => {
        const formattedDate = format(new Date(cur.date), 'yyyy-MM-dd');
        return {...prev, [formattedDate]: {marked: true}};
      }, {}),
    [logs],
  );

  const {block} = styled;

  const filteredLogs = logs.filter(
    item => format(new Date(item.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <View style={block}>
      <FeedList
        logs={filteredLogs}
        ListHeaderComponent={
          <CaledarView
            markedDates={markedDates}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        }
      />
    </View>
  );
};

const styled = StyleSheet.create({
  block: {flex: 1},
});

export default CalendarScreen;
