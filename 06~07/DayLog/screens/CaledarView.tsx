import {StyleSheet} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';

interface CalendarProps {
  markedDates: {[index: string]: {marked: boolean}};
}

const CaledarView = ({markedDates}: CalendarProps) => {
  //현재 연/월 사용하기

  //   const markedDates = {
  //     '2022-10-19': {
  //       marked: true,
  //       dotColor: 'orange',
  //     },
  //     '2022-10-21': {
  //       marked: true,
  //     },
  //     '2022-10-23': {
  //       marked: true,
  //     },
  //   };
  return (
    <Calendar
      style={styled.calendar}
      markedDates={markedDates}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        dotColor: '#009688',
        todayTextColor: '#009688',
      }}
    />
  );
};

export default CaledarView;

const styled = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
