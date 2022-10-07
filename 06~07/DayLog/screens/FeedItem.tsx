import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {LogTypes} from '../contexts/LogContext';
import formatDate from '../utils/formatDate';

interface FeedItemProps {
  data: LogTypes;
}

const FeedItem = ({data}: FeedItemProps) => {
  const {body, date, id, title} = data;
  const {container, dateText, titleText, bodyText} = style;

  function truncate(text: string) {
    const replaced = text.replace(/\n/g, ' ');
    if (replaced.length <= 100) {
      return replaced;
    }
    return replaced.slice(0, 100).concat('...');
  }

  return (
    <Pressable style={container}>
      <Text style={dateText}>{formatDate(date)}</Text>
      <Text style={titleText}>{title}</Text>
      <Text style={bodyText}>{truncate(body)}</Text>
    </Pressable>
  );
};

export default FeedItem;

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
