import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {LogTypes} from '../contexts/LogContext';
import formatDate from '../utils/formatDate';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RootParamList} from '../types/RootParamList';

interface FeedItemProps {
  log: LogTypes;
}
type BottomTabNavigateTypes = BottomTabNavigationProp<RootParamList, 'Main'>;
const FeedListItem = ({log}: FeedItemProps) => {
  const {body, date, id, title} = log;
  const {container, dateText, titleText, bodyText} = style;
  const navigation = useNavigation<BottomTabNavigateTypes>();

  const onPress = () => {
    navigation.navigate('Write', log);
  };

  function truncate(text: string) {
    const replaced = text.replace(/\n/g, ' ');
    if (replaced.length <= 100) {
      return replaced;
    }
    return replaced.slice(0, 100).concat('...');
  }

  return (
    <Pressable style={container} onPress={onPress}>
      <Text style={dateText}>{formatDate(new Date(date))}</Text>
      <Text style={titleText}>{title}</Text>
      <Text style={bodyText}>{truncate(body)}</Text>
    </Pressable>
  );
};

export default FeedListItem;

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  dateText: {
    color: '#acacac',
    marginBottom: 8,
  },
  titleText: {
    fontWeight: '700',
    color: 'black',
    fontSize: 20,
    marginBottom: 8,
  },
  bodyText: {
    paddingLeft: 6,
    marginBottom: 8,
  },
});
