import {Text, Pressable, StyleSheet, PressableProps} from 'react-native';
import React from 'react';

interface ButtonProps extends PressableProps {
  buttonText: string;
  hasMarginTop?: boolean;
  hasMarginBottom?: boolean;
  isPrimry?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    buttonText = 'untitle',
    hasMarginBottom,
    hasMarginTop,
    isPrimry = true,
    ...rest
  } = props;
  const hasMargin = hasMarginTop
    ? {marginTop: 10}
    : hasMarginBottom
    ? {marginBottom: 10}
    : {};
  const themeStyled = {
    backgroud: isPrimry ? {} : {backgroundColor: ''},
    text: isPrimry ? {} : {color: '#6200ee'},
  };
  const {container, text} = styled;
  const ButtonStyle = [container, hasMargin, themeStyled.backgroud];
  return (
    // <View > /
    <Pressable style={ButtonStyle} {...rest}>
      <Text style={[text, themeStyled.text]}>{buttonText}</Text>
    </Pressable>
    // </View>
  );
};

export default Button;

const styled = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
