import {
  View,
  StyleSheet,
  Pressable,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import React, {useState} from 'react';
import Icon from '../atoms/Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import UploadModeModal from '../organisms/UploadModeModal';
import useImagePicker from '../../hooks/useImagePicker';
import {useNavigation} from '@react-navigation/native';
import {MainNavigateType} from '../../types/navigateTypes';

const TABBAR_HEIGHT = 49;

const CameraButton = () => {
  const navigate = useNavigation<MainNavigateType>();
  const {container, circle} = styled;

  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);

  const bottom = Platform.select({
    android: TABBAR_HEIGHT / 2,
    ios: TABBAR_HEIGHT / 2 + insets.bottom,
  });

  const {onLaunchCamera, onLaunchImageLibrary} = useImagePicker();

  const handlePress = () => {
    if (Platform.OS === 'android') {
      setModalVisible(true);
      return;
    }
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['카메라로 촬영하기', '사진 선택하기', '취소'],
        title: '사진 업로드',
        cancelButtonIndex: 2,
      },
      (buttenIndex: number) => {
        switch (buttenIndex) {
          case 0:
            onTakePicture();
            return;
          case 1:
            onSelectPicture();
            return;

          default:
            return;
        }
      },
    );
  };

  const onTakePicture = async () => {
    const response = await onLaunchCamera();
    // console.log('사진찍기', response);
    navigate.navigate('upload', response);
  };
  const onSelectPicture = async () => {
    const response = await onLaunchImageLibrary();
    // console.log('사진선택', response);
    navigate.navigate('upload', response);
  };

  const onModalClose = () => {
    setModalVisible(false);
  };
  return (
    <>
      <View style={[container, {bottom}]}>
        <Pressable style={circle} onPress={handlePress}>
          <Icon name="camera-alt" color="white" />
        </Pressable>
      </View>
      {Platform.OS === 'android' && (
        <UploadModeModal
          modalVisible={modalVisible}
          onModalClose={onModalClose}
          onSelectPicture={onSelectPicture}
          onTakePicture={onTakePicture}
        />
      )}
    </>
  );
};

export default CameraButton;

const styled = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: 46,
    left: '50%',
    height: 46,
    backgroundColor: '#6200ee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    transform: [
      {
        translateX: -23,
      },
    ],
    ...Platform.select({
      ios: {
        shadowColor: '#4d4d4d',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        overflow: 'hidden',
      },
    }),
  },
  circle: {
    backgroundColor: '#6200ee',
    borderRadius: 23,
    height: 46,
    width: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
