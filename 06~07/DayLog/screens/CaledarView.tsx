import {StyleSheet} from 'react-native';
import React, {SetStateAction} from 'react';
import {Calendar} from 'react-native-calendars';

interface CalendarProps {
  markedDates: {[index: string]: {marked: boolean}};
  selectedDate: string;
  setSelectedDate: React.Dispatch<SetStateAction<string>>;
}

const CaledarView = ({
  markedDates,
  selectedDate,
  setSelectedDate,
}: CalendarProps) => {
  //현재 연/월 사용하기

  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <Calendar
      style={styled.calendar}
      markedDates={markedSelectedDate}
      onDayPress={e => setSelectedDate(e.dateString)}
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
