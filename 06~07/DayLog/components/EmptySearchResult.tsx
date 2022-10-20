import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';

interface EmptyProps {
  type: 'NOT_FOUND' | 'EMPTY_KEYWORD';
}

const EmptySearchResult = ({type}: EmptyProps) => {
  const {block, text} = Styled;
  const message = useMemo(
    () =>
      type === 'NOT_FOUND' ? '검색 결과가 없습니다.' : '검색어를 입력해주세요',
    [type],
  );
  return (
    <View style={block}>
      <Text style={text}>{message}</Text>
    </View>
  );
};

export default EmptySearchResult;

const Styled = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#9e9e9e',
    fontSize: 16,
  },
});
