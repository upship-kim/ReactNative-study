import React, {useState} from 'react';
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {getTodo, TodoTypes} from './myApi';

const queryClient = new QueryClient();

const Test = () => {
  const [id, setId] = useState<number>(1);
  const {data, isLoading} = useQuery<TodoTypes>(
    ['todo', id],
    () => getTodo(id),
    {cacheTime: 50000},
  );

  if (isLoading) return <ActivityIndicator size={24} />;
  return (
    <View>
      <Pressable onPress={() => setId(prev => prev - 1)}>
        <Text>이전</Text>
      </Pressable>
      <Pressable onPress={() => setId(prev => prev + 1)}>
        <Text>추가</Text>
      </Pressable>
      {data && (
        // <FlatList
        //   data={data}
        //   renderItem={({item}) => (
        //     <View>
        //       <Text>{item.title}</Text>
        //     </View>
        //   )}
        //   keyExtractor={({id}) => String(id)}
        // />
        <>
          <Text>{data.id}</Text>
          <Text>{data.userId}</Text>
          <Text>{data.title}</Text>
          <Text>{data.completed}</Text>
        </>
      )}
    </View>
  );
};
const Temp = () => {
  return (
    <View>
      <Text>asdfasdfasdf</Text>
    </View>
  );
};

const App = () => {
  const [state, setState] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <Pressable onPress={() => setState(!state)}>
          <Text>전환</Text>
        </Pressable>
        {!state ? <Test /> : <Temp />}
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
