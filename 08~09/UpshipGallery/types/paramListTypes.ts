import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ImagePickerResponse} from 'react-native-image-picker';
import {PostTypes} from '../lib/posts';

export type RootParamList = {
  main: undefined;
  upload: ImagePickerResponse;
  modify: {id: string; description: string};
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
  post: PostTypes;
  profile: {userId: string; displayName: string} | undefined;
};
export type MyProfileParamList = {
  myProfile: undefined;
  post: PostTypes;
};
