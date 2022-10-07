import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  Animated,
  ViewProps,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootParamList} from '../types/RootParamList';

interface ButtonProps {
  hidden: boolean;
}
// interface AnimatedStyleType extends Animated.AnimatedProps<ViewProps> {}

const FloatingWriteButton = ({hidden}: ButtonProps) => {
  const {wrapper, button, icon} = Style;

  const navigate = useNavigation<NavigationProp<RootParamList, 'Main'>>();

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 0 : 1,
      useNativeDriver: true,
    }).start();
    return () => {};
  }, [animation, hidden]);

  const onPress = () => navigate.navigate('Write');
  // const temp: AnimatedStyleType = {
  //   style: {
  //     transform: [
  //       {
  //         translateX: animation.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: [0, 88],
  //         }),
  //       },
  //     ],
  //     opacity: animation.interpolate({
  //       inputRange: [0, 1],
  //       outputRange: [1, 0],
  //     }),
  //   },
  // };
  return (
    <View style={[wrapper]}>
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
