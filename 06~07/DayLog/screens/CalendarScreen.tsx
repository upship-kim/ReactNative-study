import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CalendarScreen = () => {
  const {block} = styled;
  return (
    <View style={block}>
      <Text>CalendarScreen</Text>
    </View>
  );
};

const styled = StyleSheet.create({block: {}});

export default CalendarScreen;
