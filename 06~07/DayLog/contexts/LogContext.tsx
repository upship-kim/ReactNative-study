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
};

export type LogTypes = {
  id: string;
  title: string;
  body: string;
  date: Date;
  // setText: React.Dispatch<React.SetStateAction<string>>;
};

const LogContext = createContext<DataTypes>({
  logs: [],
  onCreate: () => {},
  onDelete: () => {},
});

export const LogContextProvider = ({children}: ProviderProps) => {
  const [logs, setLogs] = useState<LogTypes[]>([
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04'),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('1990-09-24'),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04'),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('1990-09-24'),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04'),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('1990-09-24'),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04'),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('1990-09-24'),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04'),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('1990-09-24'),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04'),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('1990-09-24'),
      title: 'test333333',
    },
    {
      id: uuidv4(),
      body: '테스트 바디1',
      date: new Date(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-04'),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('1990-09-24'),
      title: 'test333333',
    },
  ]);

  const onCreate = (props: Omit<LogTypes, 'id'>) => {
    setLogs(logs.concat({id: uuidv4(), ...props}));
  };
  const onDelete = ({id}: Pick<LogTypes, 'id'>) => {
    setLogs(logs.filter(item => item.id !== id));
  };

  const Provider = LogContext.Provider;
  return <Provider value={{logs, onCreate, onDelete}}>{children}</Provider>;
};

export default LogContext;
