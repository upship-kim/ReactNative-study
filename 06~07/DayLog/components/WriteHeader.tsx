import {View, StyleSheet} from 'react-native';
import React from 'react';
import IconButton from './IconButton';

interface WriteHeaderProps {
  onSave: () => void;
  goBack: () => void;
  onAskRemove: () => void;
}

const WriteHeader = ({onSave, goBack, onAskRemove}: WriteHeaderProps) => {
  const {container, blockLeft, blockRight} = style;

  return (
    <View style={container}>
      <View style={blockLeft}>
        <IconButton name="arrow-back" onPress={goBack} color="#424242" />
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
  blockRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
