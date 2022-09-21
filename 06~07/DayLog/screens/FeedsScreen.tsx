import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FeedsScreen = () => {
  const {block} = styled;
  return (
    <View style={block}>
      <Text>FeedsScreen</Text>
    </View>
  );
};

const styled = StyleSheet.create({block: {}});

export default FeedsScreen;
