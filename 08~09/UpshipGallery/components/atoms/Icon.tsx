import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconProps} from 'react-native-vector-icons/Icon';

interface LocalIconProps extends IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon = (props: LocalIconProps) => {
  return <MaterialIcons size={24} {...props} />;
};

export default Icon;
