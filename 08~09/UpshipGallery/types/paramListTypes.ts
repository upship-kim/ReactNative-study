import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type RootParamList = {
  main: undefined;
  upload: undefined;
  modify: undefined;
  setting: undefined;
  signIn: {isJoin: boolean};
  welcome: FirebaseAuthTypes.User;
};

export type MainTabParamList = {
  home: undefined;
  myProfile: undefined;
};
export type HomeParamList = {
  feed: undefined;
  post: undefined;
  profile: undefined;
};
export type MyProfileParamList = {
  myProfile: undefined;
};
