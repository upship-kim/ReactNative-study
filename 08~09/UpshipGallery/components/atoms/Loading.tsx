import {ActivityIndicator, ViewStyle} from 'react-native';
import React from 'react';

interface LoadingProps {
  style?: ViewStyle;
  color?: string;
  size?: number;
}

const Loading = ({...rest}: LoadingProps) => {
  return <ActivityIndicator color={'#6200ee'} size={32} {...rest} />;
};

export default Loading;
