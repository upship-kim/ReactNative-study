import {View, StyleSheet, TextInput} from 'react-native';
import React, {useRef} from 'react';
import Input from '../atoms/Input';
import {FormTypes} from '../../screens/SignInScreen';

interface SignFormProps {
  isJoin: boolean;
  onSubmit: () => void;
  joinForm: FormTypes;
  onChange: (value: string, key: string) => void;
}

const SignForm = ({isJoin, onSubmit, onChange, joinForm}: SignFormProps) => {
  const {confirmPassword, email, password} = joinForm;
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  return (
    <View style={styled.container}>
      <Input
        hasMarginBottom
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        autoFocus
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="아이디 입력"
        value={email}
        onChangeText={text => onChange(text, 'email')}
      />
      <Input
        hasMarginBottom
        returnKeyType={isJoin ? 'next' : 'done'}
        secureTextEntry
        placeholder="비밀번호 입력"
        textContentType="password"
        ref={passwordRef}
        value={password}
        onChangeText={text => onChange(text, 'password')}
        onSubmitEditing={() =>
          isJoin ? confirmPasswordRef.current?.focus() : onSubmit
        }
      />
      {isJoin && (
        <Input
          returnKeyType="done"
          secureTextEntry
          placeholder="비밀번호 확인"
          textContentType="password"
          value={confirmPassword}
          ref={confirmPasswordRef}
          onChangeText={text => onChange(text, 'confirmPassword')}
          onSubmitEditing={onSubmit}
        />
      )}
    </View>
  );
};

export default SignForm;

const styled = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 60,
    paddingHorizontal: 16,
  },
});
