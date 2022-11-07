import {Image, ImageStyle} from 'react-native';
import React from 'react';

interface AvatarProps {
  source: {uri: string} | null;
  size?: number;
  style?: ImageStyle;
}

const Avatar = ({size, source, style}: AvatarProps) => {
  const customSize = size
    ? {width: size, height: size, borderRadius: size / 2}
    : {};
  return (
    <Image
      source={source ?? require('../../assets/user.png')}
      resizeMode="cover"
      style={[style, customSize]}
    />
  );
};

export default Avatar;
