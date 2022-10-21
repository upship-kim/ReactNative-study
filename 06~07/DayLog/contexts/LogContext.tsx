import React, {createContext, useEffect, useMemo, useState} from 'react';
import {Omit} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import logsStorage from '../storage/logsStorage';

type ProviderProps = {
  children: React.ReactNode;
};

type DataTypes = {
  logs: LogTypes[];
  onCreate: (props: Omit<LogTypes, 'id'>) => void;
  onDelete: (props: Pick<LogTypes, 'id'>) => void;
  onModify: (props: LogTypes) => void;
};

export type LogTypes = {
  id: string;
  title: string;
  body: string;
  date: string;
};

const LogContext = createContext<DataTypes>({
  logs: [],
  onCreate: () => {},
  onDelete: () => {},
  onModify: (props: LogTypes) => {},
});

export const LogContextProvider = ({children}: ProviderProps) => {
  const [logs, setLogs] = useState<LogTypes[]>([]);

  const {getLogs, setLogs: saveLogs} = logsStorage();

  useEffect(() => {
    (async () => {
      const response = await getLogs();
      setLogs(response);
    })();
    return () => {};
  }, []);

  useEffect(() => {
    (async () => {
      await saveLogs(logs);
    })();
    return () => {};
  }, [logs]);

  const sortLogs =
    useMemo(
      () =>
        logs.sort(({date}, {date: date1}) => {
          if (date > date1) {
            return -1;
          } else if (date1 > date) {
            return 1;
          }
          return 0;
        }),
      [logs],
    ) ?? [];

  const onCreate = (props: Omit<LogTypes, 'id'>) => {
    setLogs(logs.concat({id: uuidv4(), ...props}));
  };
  const onDelete = ({id}: Pick<LogTypes, 'id'>) => {
    setLogs(sortLogs.filter(item => item.id !== id));
  };
  const onModify = (props: LogTypes) => {
    setLogs(
      sortLogs.map(item => {
        if (item.id === props.id) {
          return {...props};
        }
        return {...item};
      }),
    );
  };

  const Provider = LogContext.Provider;
  return (
    <Provider value={{logs: sortLogs, onCreate, onDelete, onModify}}>
      {children}
    </Provider>
  );
};

export default LogContext;
