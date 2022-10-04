import {Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IconProps {
  name: string;
  onPress: () => void;
  color?: string;
  hasMarginRight?: boolean;
}

const IconButton = ({
  name,
  onPress,
  color,
  hasMarginRight = false,
}: IconProps) => {
  return (
    <Pressable onPress={onPress} style={[hasMarginRight && {marginRight: 24}]}>
      <Icon name={name} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;
