import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import React, {PropsWithChildren} from 'react';

const KeyboardAvoiding: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <KeyboardAvoidingView
      style={styled.container}
      behavior={Platform.select({ios: 'padding'})}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoiding;

const styled = StyleSheet.create({container: {flex: 1}});
