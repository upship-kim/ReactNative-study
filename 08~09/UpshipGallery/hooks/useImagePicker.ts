import {Platform} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  ImageLibraryOptions,
} from 'react-native-image-picker';

const useImagePicker = () => {
  const imagePickerOption: ImageLibraryOptions = {
    mediaType: 'photo',
    maxWidth: 768,
    maxHeight: 768,
    includeBase64: Platform.OS === 'android',
  };

  const CallbackFn = (response: ImagePickerResponse) => {
    if (!response || response.didCancel) {
      return;
    }
    console.log(response);
  };

  const onLaunchCamera = () => {
    return launchCamera(imagePickerOption, CallbackFn);
  };
  const onLaunchImageLibrary = () => {
    return launchImageLibrary(imagePickerOption, CallbackFn);
  };

  return {onLaunchCamera, onLaunchImageLibrary};
};

export default useImagePicker;
