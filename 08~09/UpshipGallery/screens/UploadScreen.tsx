import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UploadNavigateType, UploadRouteType} from '../types/navigateTypes';
import {useNavigation, useRoute} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import Input from '../components/atoms/Input';
import IconRightButton from '../components/molecules/IconRightButton';
import {createPost} from '../lib/posts';
import {v4} from 'uuid';
import {useUserContext} from '../contexts/userContext';

const UploadScreen = () => {
  const navigate = useNavigation<UploadNavigateType>();
  const {params} = useRoute<UploadRouteType>();
  const {container, image, input} = styled;

  const {width} = useWindowDimensions();
  const animation = useRef(new Animated.Value(width)).current;
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [description, setDescription] = useState<string>('');
  const {user} = useUserContext();

  const onSubmit = useCallback(async () => {
    navigate.pop();
    if (!params.assets?.length || !user) {
      return;
    }
    try {
      const asset = params.assets[0];
      const extension = (asset?.fileName as string).split('.').pop();
      const reference = storage().ref(`/photo/${user.id}.${v4()}.${extension}`);

      if (Platform.OS === 'android') {
        await reference.putString(asset.base64 ?? '', 'base64', {
          contentType: asset.type,
        });
      } else {
        await reference.putFile(asset.uri ?? '');
      }

      const photoURL = await reference.getDownloadURL();

      await createPost({photoURL, user, description});
    } catch (e) {}
  }, [description, navigate, params.assets, user]);

  useEffect(() => {
    const didShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const didHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      didShow.remove();
      didHide.remove();
    };
  }, []);

  useEffect(() => {
    navigate.setOptions({
      headerRight: () => (
        <IconRightButton name="send" color="#6200ee" onPress={onSubmit} />
      ),
    });
    return () => {};
  }, [navigate, onSubmit]);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isKeyboardOpen ? 0 : width,
      useNativeDriver: false,
      duration: 100,
      delay: 0,
    }).start();
  }, [animation, isKeyboardOpen, width]);

  if (!params.assets?.length) {
    return (
      <SafeAreaView>
        <Text>사진이 존재하지 않습니다.</Text>
      </SafeAreaView>
    );
  }

  return (
    <KeyboardAvoidingView
      style={container}
      behavior={(Platform.OS === 'ios' && 'height') || undefined}
      keyboardVerticalOffset={Platform.select({ios: 180})}>
      <View style={container}>
        <Animated.Image
          style={[image, {height: animation}]}
          source={{uri: params.assets[0].uri}}
          resizeMode="cover"
        />
        <Input
          multiline
          style={input}
          placeholder="이 사진에 대한 설명을 입력하세요."
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default UploadScreen;

const styled = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
  },
  input: {
    flex: 1,
    padding: 15,
    backgroundColor: '#e7e7e7',
  },
});
