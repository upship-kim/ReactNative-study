import {View, StyleSheet, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import IconButton from './IconButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
interface WriteHeaderProps {
  onSave: () => void;
  goBack: () => void;
  onAskRemove: () => void;
  onChangeDate: (date: Date) => void;
  selectedDate: Date;
}
type PickerModeType = 'date' | 'time';
const WriteHeader = ({
  onSave,
  goBack,
  selectedDate,
  onAskRemove,
  onChangeDate,
}: WriteHeaderProps) => {
  const {container, blockLeft, blockRight, blockCenter} = style;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickerMode, setPickerMode] = useState<PickerModeType>('date');

  const showDatePicker = (mode: PickerModeType) => {
    if (mode === 'date') {
      setPickerMode('date');
    } else {
      setPickerMode('time');
    }
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    onChangeDate(date);
    hideDatePicker();
  };
  return (
    <>
      <View style={container}>
        <View style={blockLeft}>
          <IconButton name="arrow-back" onPress={goBack} color="#424242" />
        </View>
        <View style={blockCenter}>
          <Pressable onPress={() => showDatePicker('date')}>
            <Text>{format(new Date(selectedDate), 'PPP', {locale: ko})}</Text>
          </Pressable>

          <Pressable onPress={() => showDatePicker('time')}>
            <Text>{`   ${format(new Date(selectedDate), 'p', {
              locale: ko,
            })}`}</Text>
          </Pressable>
        </View>
        <View style={blockRight}>
          <IconButton
            name="delete-forever"
            hasMarginRight
            onPress={onAskRemove}
            color="#ef5350"
          />
          <IconButton name="check" onPress={onSave} color="#009688" />
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={pickerMode}
        date={selectedDate}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />
    </>
  );
};

export default WriteHeader;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  blockLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blockCenter: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
