import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={() => (
          <View>
            <Text>main</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
