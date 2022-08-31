/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 * //Prettier 와 연관 있는 키워드 (Prettier의 `--require-pragma` 명령어 옵션에 따라 키워드가 있는 파일만 코드스타일링함 )
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Counter from './components/Counter';
import Greating from './components/Greating';
import Props from './components/Props';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const handleChange = (type: string) => {
    if (type === 'plus') {
      setCount(prev => prev + 1);
      return;
    }
    setCount(prev => prev - 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Greating />
      <Props name="upship" text="리액트 네이티브 공부중" />
      <Counter count={count} handleChange={handleChange} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
