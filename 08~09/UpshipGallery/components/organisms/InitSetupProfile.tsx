import {View, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

interface SetupProfileProps {
  onSubmit: () => void;
}

const InitSetupProfile = ({onSubmit}: SetupProfileProps) => {
  const {picture, buttons} = styled;
  return (
    <>
      <View style={picture} />
      <Input hasMarginTop placeholder="닉네임" onSubmitEditing={onSubmit} />
      <View style={buttons}>
        <Button buttonText="다음" hasMarginBottom />
        <Button buttonText="취소" isPrimry={false} />
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
