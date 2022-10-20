import {
  View,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchContext from '../contexts/SearchContext';

const SearchHeader = () => {
  const {width} = useWindowDimensions();
  const {keyword, setKeyword} = useContext(SearchContext);
  const {block, input, button} = Styled;

  return (
    <View style={[block, {width: width - 34}]}>
      <TextInput
        style={[input]}
        value={keyword}
        onChangeText={setKeyword}
        placeholder="검색어를 입력하세요"
        autoFocus
      />
      <Pressable style={[button]} onPress={() => setKeyword('')}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
};

export default SearchHeader;

const Styled = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});
