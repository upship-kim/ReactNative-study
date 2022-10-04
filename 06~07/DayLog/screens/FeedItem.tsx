import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {LogTypes} from '../contexts/LogContext';

interface FeedItemProps {
  data: LogTypes;
}

const FeedItem = ({data}: FeedItemProps) => {
  const {body, date, id, title} = data;
  const {container, dateText, titleText, bodyText} = style;
  return (
    <View style={container}>
      <Text style={dateText}>{new Date(date).toLocaleString()}</Text>
      <Text style={titleText}>{title}</Text>
      <Text style={bodyText}>{body}</Text>
    </View>
  );
};

export default FeedItem;

const style = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    padding: 10,
  },
  dateText: {
    color: '#acacac',
    marginBottom: 4,
  },
  titleText: {
    fontWeight: '700',
    color: 'black',
    fontSize: 20,
    marginBottom: 4,
  },
  bodyText: {
    marginBottom: 4,
  },
});
