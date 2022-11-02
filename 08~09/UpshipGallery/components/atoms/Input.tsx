import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import React, {forwardRef} from 'react';

interface InputProps extends TextInputProps {
  hasMarginBottom?: boolean;
  hasMarginTop?: boolean;
}

const Input = forwardRef(
  (props: InputProps, ref: React.ForwardedRef<TextInput>) => {
    const {hasMarginBottom, hasMarginTop, ...rest} = props;
    const {container} = styled;
    const hasMargin = hasMarginTop
      ? {marginTop: 10}
      : hasMarginBottom
      ? {marginBottom: 10}
      : {};
    const InputStyle = [container, hasMargin];
    return <TextInput style={InputStyle} {...rest} ref={ref} />;
  },
);

export default Input;

const styled = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 38,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});
