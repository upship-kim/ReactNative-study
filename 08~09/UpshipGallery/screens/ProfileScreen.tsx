import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ProfileNavigateType, ProfileRouteType} from '../types/navigateTypes';
import Profile from '../components/organisms/Profile';

const ProfileScreen = () => {
  const route = useRoute<ProfileRouteType>();
  const navigation = useNavigation<ProfileNavigateType>();
  const {displayName, userId} = route.params ?? {};

  useEffect(() => {
    navigation.setOptions({
      title: displayName,
    });
    return () => {};
  }, [displayName, navigation]);

  return <Profile userId={userId ?? ''} />;
};

export default ProfileScreen;
