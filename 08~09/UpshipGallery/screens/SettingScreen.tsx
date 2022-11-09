import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SettingNavigateType} from '../types/navigateTypes';
import {useUserContext} from '../contexts/userContext';
import {signOut} from '../lib/auth';

const SettingScreen = () => {
  const {container, item, itemText} = styled;
  const navigation = useNavigation<SettingNavigateType>();
  const {setUser} = useUserContext();
  const onLogout = async () => {
    await signOut();
    setUser(null);
    navigation.replace('signIn', {isJoin: false});
  };

  return (
    <View style={container}>
      <Pressable
        style={({pressed}) => [
          item,
          pressed && Platform.OS === 'ios' && {opacity: 0.5},
        ]}
        android_ripple={{color: '#eee'}}
        onPress={onLogout}>
        <Text style={itemText}>로그아웃</Text>
      </Pressable>
    </View>
  );
};

export default SettingScreen;

const styled = StyleSheet.create({
  container: {flex: 1, paddingTop: 22},
  item: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  itemText: {
    fontSize: 16,
  },
});
