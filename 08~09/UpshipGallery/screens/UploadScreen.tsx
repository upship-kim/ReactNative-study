import {
  Animated,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UploadNavigateType, UploadRouteType} from '../types/navigateTypes';
import {useNavigation, useRoute} from '@react-navigation/native';
import Input from '../components/atoms/Input';
import IconRightButton from '../components/molecules/IconRightButton';

const UploadScreen = () => {
  const navigate = useNavigation<UploadNavigateType>();
  const {params} = useRoute<UploadRouteType>();
  const {container, image, input} = styled;

  const {width} = useWindowDimensions();
  const animation = useRef(new Animated.Value(width)).current;
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [description, setDescription] = useState<string>('');

  const onSubmit = () => {};

  useEffect(() => {
    const didShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const didHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });
    navigate.setOptions({
      headerRight: () => (
        <IconRightButton name="send" color="#6200ee" onPress={onSubmit} />
      ),
    });
    return () => {
      didShow.remove();
      didHide.remove();
    };
  }, []);

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
