import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {MyProfileStackNavigateType} from '../types/navigateTypes';
import {useUserContext} from '../contexts/userContext';
import Profile from '../components/organisms/Profile';

const MyProfileScreen = () => {
  const navigation = useNavigation<MyProfileStackNavigateType>();
  const {user} = useUserContext();
  useEffect(() => {
    if (!user?.displayName) {
      return;
    }
    navigation.setOptions({title: user?.displayName});
    return () => {};
  }, [navigation, user?.displayName]);
  if (!user?.id) {
    return null;
  }
  return (
    <View style={styled.container}>
      <Profile userId={user?.id} />
    </View>
  );
};

export default MyProfileScreen;

const styled = StyleSheet.create({
  container: {flex: 1},
});
