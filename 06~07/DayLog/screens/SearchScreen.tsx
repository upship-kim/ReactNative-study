import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SearchScreen = () => {
  const {block} = styled;
  return (
    <View style={block}>
      <Text>SearchScreen</Text>
    </View>
  );
};

const styled = StyleSheet.create({block: {}});

export default SearchScreen;
