import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  Animated,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootParamList} from '../types/RootParamList';
import {StyleProp} from 'react-native';

interface ButtonProps {
  hidden: boolean;
}

const FloatingWriteButton = ({hidden}: ButtonProps) => {
  const {wrapper, button, icon} = Style;

  const navigate = useNavigation<NavigationProp<RootParamList, 'Main'>>();

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animation, {
      toValue: hidden ? 0 : 1,
      useNativeDriver: true,
      tension: 45,
      friction: 5,
    }).start();
    return () => {};
  }, [animation, hidden]);

  const onPress = () => {
    navigate.navigate('Write');
  };
  const animationAction = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 88],
        }),
      },
    ],
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
  };
  return (
    <Animated.View style={[wrapper, animationAction]}>
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
    </Animated.View>
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
