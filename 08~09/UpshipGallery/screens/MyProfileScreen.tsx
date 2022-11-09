import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {
  MainNavigateType,
  MyProfileStackNavigateType,
} from '../types/navigateTypes';
import {useUserContext} from '../contexts/userContext';
import Profile from '../components/organisms/Profile';
import IconRightButton from '../components/molecules/IconRightButton';

type MergeRootNavigateTypes = CompositeNavigationProp<
  MainNavigateType,
  MyProfileStackNavigateType
>;

const MyProfileScreen = () => {
  const navigation = useNavigation<MergeRootNavigateTypes>();
  const {user} = useUserContext();

  const onMoveSetting = () => {
    navigation.navigate('setting');
  };

  useEffect(() => {
    if (!user?.displayName) {
      return;
    }
    navigation.setOptions({
      title: user?.displayName,
      headerRight: () => (
        <IconRightButton
          name="settings"
          color="#6200ee"
          onPress={onMoveSetting}
        />
      ),
    });
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
