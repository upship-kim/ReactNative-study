import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Empty = () => {
  const {block, description, image} = styles;
  return (
    <View style={block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={image}
      />
      <Text style={description}>야호 ! 할 일이 없어요</Text>
    </View>
  );
};

export default Empty;
const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 240,
    height: 179,
    resizeMode: 'contain',
    marginBottom: 16,
  },
});
