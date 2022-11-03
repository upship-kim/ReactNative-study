import {View, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from '../atoms/Icon';

interface IconRightButtonProps {
  name: string;
  color: string;
  onPress: () => void;
}

const IconRightButton = ({color, name, onPress}: IconRightButtonProps) => {
  const {container, circle} = styled;
  return (
    <View style={container}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [circle, pressed && {opacity: 0.3}]}>
        <Icon name={name} color={color} />
      </Pressable>
    </View>
  );
};

export default IconRightButton;

const styled = StyleSheet.create({
  container: {
    borderRadius: 24,
    overflow: 'hidden',
    marginRight: -12,
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
