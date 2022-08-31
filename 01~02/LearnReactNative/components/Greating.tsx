import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Greating = () => {
  const {container, first, second, third, four, text} = styles;

  return (
    <View style={container}>
      <View style={first}>
        <Text style={[text, {color: 'white'}]}>Greating 1</Text>
        <Text style={[text, {color: 'white'}]}>justifyContent : center</Text>
      </View>
      <View style={second}>
        <Text style={[text, {color: 'white'}]}>Greating 2</Text>
        <Text style={[text, {color: 'white'}]}>alignItems : center</Text>
      </View>
      <View style={third}>
        <Text style={text}>Greating 3</Text>
      </View>
      <View style={four}>
        <Text
          style={[
            text,
            {
              borderColor: 'black',
              borderWidth: 10,
              textAlignVertical: 'center',
              paddingLeft: 10,
            },
          ]}>
          Greating 4
        </Text>
      </View>
    </View>
  );
};

export default Greating;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
  },
  first: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    tintColor: 'white',
  },
  second: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
  },
  third: {backgroundColor: 'yellow', flex: 1, textAlign: 'center'},
  four: {
    backgroundColor: 'white',
  },
  text: {color: 'gray'},
});
