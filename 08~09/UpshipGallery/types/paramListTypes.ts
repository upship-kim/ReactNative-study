import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ImagePickerResponse} from 'react-native-image-picker';

export type RootParamList = {
  main: undefined;
  upload: ImagePickerResponse;
  modify: undefined;
  setting: undefined;
  signIn: {isJoin: boolean};
  welcome: FirebaseAuthTypes.User;
};

export type MainTabParamList = {
  homeStack: undefined;
  myProfileStack: undefined;
};
export type HomeParamList = {
  feed: undefined;
  post: undefined;
  profile: undefined;
};
export type MyProfileParamList = {
  myProfile: undefined;
};
