import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RootParamList} from './paramListTypes';

/**
 *  RootStack
 **/

// Navigator
export type MainNavigateType = NavigationProp<RootParamList, 'main'>;
export type ModifyNavigateType = NavigationProp<RootParamList, 'modify'>;
export type SettingNavigateType = NavigationProp<RootParamList, 'setting'>;
export type SignInNavigateType = NavigationProp<RootParamList, 'signIn'>;
export type UploadNavigateType = NavigationProp<RootParamList, 'upload'>;
export type WelcomeNavigateType = NavigationProp<RootParamList, 'welcome'>;

// Route
export type MainRouteType = RouteProp<RootParamList, 'main'>;
export type ModifyRouteType = RouteProp<RootParamList, 'modify'>;
export type SettingRouteType = RouteProp<RootParamList, 'setting'>;
export type SignInRouteType = RouteProp<RootParamList, 'signIn'>;
export type UploadRouteType = RouteProp<RootParamList, 'upload'>;
export type WelcomeRouteType = RouteProp<RootParamList, 'welcome'>;
