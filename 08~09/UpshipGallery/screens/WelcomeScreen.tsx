import {Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {WelcomeRouteType} from '../types/navigateTypes';
import {useRoute} from '@react-navigation/native';
import KeyboardAvoiding from '../components/atoms/KeyboardAvoiding';
import {SafeAreaView} from 'react-native-safe-area-context';
import InitSetupProfile from '../components/organisms/InitSetupProfile';

const WelcomeScreen = () => {
  const {
    params: {uid, email},
  } = useRoute<WelcomeRouteType>();

  const {container, welcomeTitle, subTitle} = styled;

  //   const onSubmit = () => {
  //     Alert.alert('submit');
  //   };

  return (
    <KeyboardAvoiding>
      <SafeAreaView style={container}>
        <Text style={welcomeTitle}>환영합니다!</Text>
        <Text style={subTitle}>프로필을 설정하세요.</Text>
        <InitSetupProfile uid={uid} />
      </SafeAreaView>
    </KeyboardAvoiding>
  );
};

export default WelcomeScreen;

const styled = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    marginVertical: 14,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'gray',
    marginVertical: 10,
  },
});
