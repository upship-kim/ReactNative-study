import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface LocalProps {
  currentDate: Date;
}

function convertToString(d: Date) {
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

const DateHead = ({currentDate}: LocalProps) => {
  const {top} = useSafeAreaInsets();

  const {Block, DateText, StatusBarPlaceholder} = styles;
  const safeAreaHeight = {height: top};
  return (
    <>
      <View style={[StatusBarPlaceholder, safeAreaHeight]} />
      <StatusBar backgroundColor={'#26a69a'} barStyle={'light-content'} />
      <View style={Block}>
        <Text style={DateText}>{convertToString(currentDate)}</Text>
      </View>
    </>
  );
};

export default DateHead;

const styles = StyleSheet.create({
  StatusBarPlaceholder: {backgroundColor: '#26a69a'},
  Block: {
    backgroundColor: '#26a69a',
    padding: 24,
  },
  DateText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
  },
});
