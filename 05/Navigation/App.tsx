import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import NativeStackNavigator from './navigator/NativeStackNavigator';
// import DrawerNavigator from './navigator/DrawerNavigator';
import 'react-native-gesture-handler';
import TabNavigator from './navigator/TabNavigator';
// import {View, Text} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      {/* <NativeStackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
