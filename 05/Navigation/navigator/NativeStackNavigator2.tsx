import * as React from 'react';
// import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Detail: {id: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NativeStackNavigator2 = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: 'blue'},
        headerTintColor: '#ffffff',
        headerBackTitle: '뒤로',
        headerBackVisible: false,
        headerLeft: ({label, canGoBack}) => (
          <TouchableWithoutFeedback
            onPress={() => {
              if (canGoBack) {
                navigation.goBack();
              }
            }}>
            <View>
              <Text>{canGoBack ? label : ''}</Text>
            </View>
          </TouchableWithoutFeedback>
        ),
        headerRight: () => (
          <View>
            <Text>right</Text>
          </View>
        ),
        headerTitle: () => (
          <View>
            <Text>title</Text>
          </View>
        ),
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({route}) => ({
          title: `상세정보 - ${route.params.id}`,
        })}
      />
    </Stack.Navigator>
  );
};

export default NativeStackNavigator2;
