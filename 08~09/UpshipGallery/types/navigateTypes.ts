import {NavigationProp, RouteProp} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RootParamList} from './paramListTypes';

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
