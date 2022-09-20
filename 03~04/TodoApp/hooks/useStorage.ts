import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
  const setStorage = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  };

  const getStorage = async (key: string) => {
    try {
      const response = await AsyncStorage.getItem(key);
      return JSON.parse(response || '');
    } catch (e) {
      console.error(e);
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error(e);
    }
  };

  return {setStorage, getStorage, clearStorage};
};

export default useStorage;
