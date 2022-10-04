import {View, StyleSheet, Platform, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootParamList} from '../types/RootParamList';
const FloatingWriteButton = () => {
  const {wrapper, button, icon} = Style;

  const navigate = useNavigation<NavigationProp<RootParamList, 'Main'>>();

  const onPress = () => navigate.navigate('Write');
  return (
    <View style={wrapper}>
      <Pressable
        style={({pressed}) => [
          button,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        onPress={onPress}>
        <Icon name="add" size={24} style={icon} />
      </Pressable>
    </View>
  );
};

export default FloatingWriteButton;

const Style = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: Platform.select({android: 'hidden'}),
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});
