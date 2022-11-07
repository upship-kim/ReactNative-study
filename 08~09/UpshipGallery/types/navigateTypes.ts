import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  HomeParamList,
  MainTabParamList,
  MyProfileParamList,
  RootParamList,
} from './paramListTypes';

/**
 *  RootStack
 **/

// Navigator

export type MainNavigateType = NativeStackNavigationProp<RootParamList, 'main'>;
export type ModifyNavigateType = NativeStackNavigationProp<
  RootParamList,
  'modify'
>;
export type SettingNavigateType = NativeStackNavigationProp<
  RootParamList,
  'setting'
>;
export type SignInNavigateType = NativeStackNavigationProp<
  RootParamList,
  'signIn'
>;
export type UploadNavigateType = NativeStackNavigationProp<
  RootParamList,
  'upload'
>;
export type WelcomeNavigateType = NativeStackNavigationProp<
  RootParamList,
  'welcome'
>;

// Route
export type MainRouteType = RouteProp<RootParamList, 'main'>;
export type ModifyRouteType = RouteProp<RootParamList, 'modify'>;
export type SettingRouteType = RouteProp<RootParamList, 'setting'>;
export type SignInRouteType = RouteProp<RootParamList, 'signIn'>;
export type UploadRouteType = RouteProp<RootParamList, 'upload'>;
export type WelcomeRouteType = RouteProp<RootParamList, 'welcome'>;

/**
 *  MainTabStack
 **/

// Navigator

export type HomeStackNavigateType = NativeStackNavigationProp<
  MainTabParamList,
  'homeStack'
>;
export type MyProfileStackNavigateType = NativeStackNavigationProp<
  MainTabParamList,
  'myProfileStack'
>;

// Route
export type HomeStackRouteType = RouteProp<MainTabParamList, 'homeStack'>;
export type MyProfileStackRouteType = RouteProp<
  MainTabParamList,
  'myProfileStack'
>;

/**
 *  HomeStack
 **/

// Navigator

export type FeedNavigateType = NativeStackNavigationProp<HomeParamList, 'feed'>;
export type HomePostNavigateType = NativeStackNavigationProp<
  HomeParamList,
  'post'
>;

export type ProfileNavigateType = NativeStackNavigationProp<
  HomeParamList,
  'profile'
>;

// Route
export type FeedRouteType = RouteProp<HomeParamList, 'feed'>;
export type PostRouteType = RouteProp<HomeParamList, 'post'>;
export type ProfileRouteType = RouteProp<HomeParamList, 'profile'>;

/**
 *  MyProfileStack
 **/

// Navigator

export type MyProfileNavigateType = NativeStackNavigationProp<
  MyProfileParamList,
  'myProfile'
>;
export type MyProfilePostNavigateType = NativeStackNavigationProp<
  MyProfileParamList,
  'post'
>;

// Route
export type MyProfileRouteType = RouteProp<MyProfileParamList, 'myProfile'>;
export type MyProfilePostRouteType = RouteProp<MyProfileParamList, 'post'>;
