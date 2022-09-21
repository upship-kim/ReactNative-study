// import {View, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';

const CommonCompo1 = ({route, navigation}: any) => {
  useEffect(() => {
    console.log('마운트');

    return () => {
      console.log('언마운트');
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log('이화면을 보고있어요');
      return () => {
        console.log('벗어났어요 ');
      };
    }, []),
  );
  return (
    <SafeAreaView>
      <View>
        <Text>{route?.params?.name ?? ''}</Text>
        {route.params.name === 'Second' && (
          <Button
            title="First로 이동하기"
            onPress={() => navigation.navigate('First')}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
type TabParamsListType = {
  First: {name: string};
  Second: {name: string};
  Third: {name: string};
};

const CommonCompo = ({route, navigation}: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>{route?.params?.name ?? ''}</Text>
        {route.params.name === 'Second' && (
          <Button
            title="First로 이동하기"
            onPress={() => navigation.navigate('First')}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabParamsListType>();

  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="First"
        component={CommonCompo1}
        initialParams={{name: 'First'}}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={30} color={focused ? 'violet' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="Second"
        component={CommonCompo}
        initialParams={{name: 'Second'}}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="auto-awesome-mosaic"
              size={30}
              color={focused ? 'violet' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Third"
        component={CommonCompo}
        initialParams={{name: '세번째 페이지에요'}}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="bar-chart"
              size={30}
              color={focused ? 'violet' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
