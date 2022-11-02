import {Text, StyleSheet, Alert, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SignInNavigateType, SignInRouteType} from '../types/navigateTypes';
import SignForm from '../components/molecules/SignForm';
import SignButtons from '../components/molecules/SignButtons';
import {signIn, signUp, FirebaseErrorTypes} from '../lib/auth';
import {responseMsg} from '../constant/sign';
import KeyboardAvoiding from '../components/atoms/KeyboardAvoiding';

export type FormTypes = {
  email: string;
  password: string;
  confirmPassword: string;
};

const initValues = {email: '', password: '', confirmPassword: ''};

const SignInScreen = () => {
  const {container, titleText} = styled;

  const navigation = useNavigation<SignInNavigateType>();

  const {
    params: {isJoin},
  } = useRoute<SignInRouteType>();

  const [joinForm, setJoinForm] = useState<FormTypes>(initValues);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      setJoinForm(initValues);
      Keyboard.dismiss();
    };
  }, [isJoin]);

  const onChange = (value: string, key: string) => {
    setJoinForm(prev => ({...prev, [key]: value}));
  };

  const onSubmit = async () => {
    Keyboard.dismiss();
    const {confirmPassword, email, password} = joinForm;

    if ((isJoin && !confirmPassword) || !email || !password) {
      Alert.alert('항목을 입력해주세요');
      return;
    }
    if (isJoin && confirmPassword !== password) {
      Alert.alert('비밀번호를 확인해주세요');
      return;
    }
    const sendInfo = {email, password};
    setLoading(true);
    try {
      const {user} = isJoin ? await signUp(sendInfo) : await signIn(sendInfo);
      navigation.navigate('welcome', user);
    } catch (error) {
      if (error) {
        const errorCode = (error as FirebaseErrorTypes).code;
        Alert.alert(responseMsg[errorCode]);
        return;
      }
      Alert.alert(`${isJoin ? '가입' : '로그인'}에 실패하였습니다.`);
    } finally {
      setLoading(false);
    }
  };

  const onNonPrimarySubmit = () => {
    navigation.navigate('signIn', {isJoin: !isJoin});
  };

  return (
    <KeyboardAvoiding>
      <SafeAreaView style={container}>
        <Text style={titleText}>Upship Gallery</Text>
        <SignForm
          isJoin={isJoin}
          joinForm={joinForm}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        <SignButtons
          isJoin={isJoin}
          joinForm={joinForm}
          onNonPrimarySubmit={onNonPrimarySubmit}
          onSubmit={onSubmit}
          loading={loading}
        />
      </SafeAreaView>
    </KeyboardAvoiding>
  );
};

export default SignInScreen;

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 26,
    fontWeight: '700',
  },
});
