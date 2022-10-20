import React, {createContext, useState} from 'react';
import {Omit} from 'react-native';
import {v4 as uuidv4} from 'uuid';

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
  const [logs, setLogs] = useState<LogTypes[]>([
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date().toISOString(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-20').toISOString(),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('2022-10-01').toISOString(),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('2022-10-08').toISOString(),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date().toISOString(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04').toISOString(),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('2022-09-24').toISOString(),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date().toISOString(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04').toISOString(),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('2022-09-24').toISOString(),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date().toISOString(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04').toISOString(),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('2022-10-24').toISOString(),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date().toISOString(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04').toISOString(),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('2022-10-31').toISOString(),
      title: 'test333333',
    },
  ]);

  const onCreate = (props: Omit<LogTypes, 'id'>) => {
    setLogs(logs.concat({id: uuidv4(), ...props}));
  };
  const onDelete = ({id}: Pick<LogTypes, 'id'>) => {
    setLogs(logs.filter(item => item.id !== id));
  };
  const onModify = (props: LogTypes) => {
    setLogs(
      logs.map(item => {
        if (item.id === props.id) {
          return {...props};
        }
        return {...item};
      }),
    );
  };

  const Provider = LogContext.Provider;
  return (
    <Provider value={{logs, onCreate, onDelete, onModify}}>{children}</Provider>
  );
};

export default LogContext;
