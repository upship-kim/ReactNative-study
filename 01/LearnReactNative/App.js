/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * //FIX: 기본적으로 flow 가 적용되는데 여기서는 삭제
 * flow: 정적 타입 시스템 ( 타입스크립트를 사용할 거라 비적용 )
 * flow strict-local
 */

import React from 'react';
// import  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>오랜만이야 </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
