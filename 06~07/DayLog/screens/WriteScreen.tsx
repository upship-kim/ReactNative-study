import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const WriteScreen = () => {
  const {block} = styled;
  return (
    <View style={block}>
      <Text>WriteScreen</Text>
    </View>
  );
};

const styled = StyleSheet.create({block: {}});

export default WriteScreen;
