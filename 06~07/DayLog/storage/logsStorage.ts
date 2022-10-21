import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogTypes} from '../contexts/LogContext';

const logsStorage = () => {
  const setLogs = async (logs: LogTypes[]) => {
    const stringLogs = JSON.stringify(logs);
    try {
      await AsyncStorage.setItem('@logs', stringLogs);
    } catch (e) {
      // saving error
    }
  };

  const getLogs = async () => {
    try {
      const value = await AsyncStorage.getItem('@logs');
      if (value) {
        const logs = JSON.parse(value);
        return logs;
      }
    } catch (e) {
      // error reading value
    }
  };
  return {getLogs, setLogs};
};

export default logsStorage;
