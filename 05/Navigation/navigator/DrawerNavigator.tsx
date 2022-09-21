import {View, Text, Button} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeScreen from '../screens/HomeScreen';
// import DetailScreen from '../screens/DetailScreen';
import NativeStackNavigator from './NativeStackNavigator';
import NativeStackNavigator2 from './NativeStackNavigator2';
import {SafeAreaView} from 'react-native-safe-area-context';

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
      drawerContent={({navigation}) => (
        <SafeAreaView>
          <View>
            <Text>Custom Drawer Component</Text>
            <Button
              title="Drawer 닫기"
              onPress={() => navigation.closeDrawer()}
            />
          </View>
        </SafeAreaView>
      )}>
      <Drawer.Screen
        name="NativeStack1"
        component={NativeStackNavigator}
        options={({navigation}) => ({
          headerLeft: () => (
            <Button title="left" onPress={() => navigation.openDrawer()} />
          ),
        })}
      />
      <Drawer.Screen name="NativeStack2" component={NativeStackNavigator2} />
      <Drawer.Screen
        name="그냥 뷰"
        component={Common}
        options={{title: '그냥 뷰에여'}}
      />
    </Drawer.Navigator>
    // <Common />
  );
};

export default DrawerNavigator;
