import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {FormTypes} from '../../screens/SignInScreen';
import Button from '../atoms/Button';

interface SignFormProps {
  isJoin: boolean;
  onSubmit: () => void;
  joinForm: FormTypes;
  onNonPrimarySubmit: () => void;
  loading: boolean;
}

const SignButtons = ({
  isJoin,
  onSubmit,
  onNonPrimarySubmit,
  loading,
}: SignFormProps) => {
  const PrimaryTitle = isJoin ? '회원가입' : '로그인';
  const nonPrimaryTitle = isJoin ? '로그인' : '회원가입';
  if (loading) {
    return (
      <View style={styled.container}>
        <ActivityIndicator size={32} color="#6200ee" />
      </View>
    );
  }
  return (
    <View style={styled.container}>
      <Button buttonText={PrimaryTitle} hasMarginBottom onPress={onSubmit} />
      <Button
        buttonText={nonPrimaryTitle}
        isPrimry={false}
        onPress={onNonPrimarySubmit}
      />
    </View>
  );
};

export default SignButtons;

const styled = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 60,
    paddingHorizontal: 16,
  },
});
