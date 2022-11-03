import {
  View,
  StyleSheet,
  Pressable,
  Platform,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import {createUser} from '../../lib/users';
import {signOut} from '../../lib/auth';
import {useNavigation} from '@react-navigation/native';
import {WelcomeNavigateType} from '../../types/navigateTypes';
import {useUserContext} from '../../contexts/userContext';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

interface SetupProfileProps {
  uid: string;
}

const InitSetupProfile = ({uid}: SetupProfileProps) => {
  const {picture, buttons} = styled;
  const navigate = useNavigation<WelcomeNavigateType>();
  const {setUser} = useUserContext();

  const [photo, setPhoto] = useState<ImagePickerResponse | null>(null);
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    setLoading(true);
    let photoURL = null;
    if (!photo?.assets) {
      return;
    }

    try {
      const [asset] = photo.assets;
      const extension = asset?.fileName?.split('.').pop();

      const reference = storage().ref(`/profile/${uid}.${extension}`);

      if (Platform.OS === 'android') {
        await reference.putString(asset.base64 ?? '', 'base64', {
          contentType: asset.type,
        });
      } else {
        const response = await reference.putFile(asset.uri ?? '');
        console.log(response);
      }
      photoURL = photo ? await reference.getDownloadURL() : null;
      console.log(photoURL);
      const userInfo = {
        displayName,
        id: uid,
        photoURL,
      };
      createUser(userInfo);
      setUser(userInfo);
      navigate.replace('main');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onCancel = () => {
    signOut();
    navigate.replace('signIn', {isJoin: false});
  };

  const onSelectPicture = async () => {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
      maxHeight: 512,
      maxWidth: 512,
      includeBase64: Platform.OS === 'android',
    });
    if (response.didCancel) {
      return;
    }
    setPhoto(response);
    console.log(response);
  };

  return (
    <>
      <Pressable onPress={onSelectPicture}>
        {photo?.assets ? (
          <Image
            style={picture}
            source={
              photo
                ? {uri: photo?.assets[0].uri}
                : require('../../assets/user.png')
            }
          />
        ) : (
          <View style={picture} />
        )}
      </Pressable>
      <Input
        hasMarginTop
        placeholder="닉네임"
        onSubmitEditing={onSubmit}
        value={displayName}
        onChangeText={setDisplayName}
      />
      {loading ? (
        <ActivityIndicator size={32} color="#6200ee" />
      ) : (
        <View style={buttons}>
          <Button buttonText="다음" hasMarginBottom onPress={onSubmit} />
          <Button buttonText="취소" isPrimry={false} onPress={onCancel} />
        </View>
      )}
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
