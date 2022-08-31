import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface LocalProps {
  name: string;
  text: string;
}

const Props = ({name, text}: LocalProps) => {
  return (
    <View style={styles.container}>
      <Text>이름은: {name}</Text>
      <Text>할말은: {text}</Text>
    </View>
  );
};

export default Props;

const styles = StyleSheet.create({
  container: {flex: 1},
});
