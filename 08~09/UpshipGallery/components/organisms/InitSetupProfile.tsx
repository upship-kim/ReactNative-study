import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import {createUser} from '../../lib/users';
import {signOut} from '../../lib/auth';
import {useNavigation} from '@react-navigation/native';
import {WelcomeNavigateType} from '../../types/navigateTypes';

interface SetupProfileProps {
  //   onSubmit: () => void;
  uid: string;
}

const InitSetupProfile = ({uid}: SetupProfileProps) => {
  const {picture, buttons} = styled;
  const navigate = useNavigation<WelcomeNavigateType>();

  const [displayName, setDisplayName] = useState('');

  const onSubmit = async () => {
    try {
      const repsonse = await createUser({displayName, id: uid, photoURL: null});
      console.log(repsonse);
    } catch (e) {}
  };

  const onCancel = () => {
    signOut();
    navigate.replace('signIn', {isJoin: false});
  };

  return (
    <>
      <View style={picture} />
      <Input
        hasMarginTop
        placeholder="닉네임"
        onSubmitEditing={onSubmit}
        value={displayName}
        onChangeText={setDisplayName}
      />
      <View style={buttons}>
        <Button buttonText="다음" hasMarginBottom onPress={onSubmit} />
        <Button buttonText="취소" isPrimry={false} onPress={onCancel} />
      </View>
    </>
  );
};

export default InitSetupProfile;

const styled = StyleSheet.create({
  picture: {
    backgroundColor: '#e1e1e1',
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  buttons: {
    width: '100%',
    marginTop: 30,
  },
});
