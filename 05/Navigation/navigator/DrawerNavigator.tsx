import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeScreen from '../screens/HomeScreen';
// import DetailScreen from '../screens/DetailScreen';
import NativeStackNavigator from './NativeStackNavigator';
import NativeStackNavigator2 from './NativeStackNavigator2';

const Common = () => {
  return (
    <View>
      <Text>그냥 뷰뷰뷰뷰뷰</Text>
    </View>
  );
};

type RootParamsList = {
  NativeStack1: undefined;
  //   Detail: {id?: number};
  NativeStack2: undefined;
  ['그냥 뷰']: undefined;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator<RootParamsList>();

  return (
    <Drawer.Navigator
      screenOptions={() => ({
        drawerStatusBarAnimation: 'fade',
        drawerType: 'front',
      })}
      //   drawerContent={() => (
      //     <View>
      //       <Text>dfadsfs</Text>
      //     </View>
      //   )}
    >
      <Drawer.Screen name="NativeStack1" component={NativeStackNavigator} />
      <Drawer.Screen name="NativeStack2" component={NativeStackNavigator2} />
      <Drawer.Screen
        name="그냥 뷰"
        component={Common}
        options={{title: 'dhqtus'}}
      />
    </Drawer.Navigator>
    // <Common />
  );
};

export default DrawerNavigator;
