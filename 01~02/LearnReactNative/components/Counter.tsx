import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

interface LocalProps {
  count: number;
  handleChange: (type: string) => void;
}

const Counter = ({count, handleChange}: LocalProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.countBox}>
        <Text>카운터의 값은??? : {count}</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title="increase"
          onPress={() => handleChange('plus')}
          color="red"
        />
        <Button
          title="decrease"
          onPress={() => handleChange('minus')}
          color="blue"
        />
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countBox: {
    flex: 2,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
  },
});
