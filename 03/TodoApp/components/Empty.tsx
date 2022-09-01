import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Empty = () => {
  const {block, description} = styles;
  return (
    <View style={block}>
      <Image source={require('../assets/images/circle.png')} />
      <Text style={description}>야호 ! 할 일이 없어요</Text>
    </View>
  );
};

export default Empty;
const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#e3e3e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
