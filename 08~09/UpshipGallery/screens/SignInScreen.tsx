import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';

const SignInScreen = () => {
  const {container, titleText, form} = styled;
  const [state, setState] = useState(false);

  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const onSubmit = () => {
    Alert.alert('submit');
  };

  return (
    <SafeAreaView style={container}>
      <Text style={titleText}>Upship Gallery</Text>
      <View style={form}>
        <Input
          hasMarginBottom
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <Input returnKeyType="done" secureTextEntry ref={passwordRef} />
      </View>
      <View style={form}>
        <Button buttonText="로그인" hasMarginBottom onPress={onSubmit} />
        <Button buttonText="회원가입" isPrimry={false} />
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  titleText: {
    fontSize: 26,
    fontWeight: '700',
  },
  form: {
    width: '100%',
    marginTop: 60,
    paddingHorizontal: 16,
  },
});
