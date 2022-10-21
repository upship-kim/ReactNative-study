import React, {createContext, useMemo, useState} from 'react';
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
      date: new Date('2022-10-01').toISOString(),
      title: 'test1111',
    },
    {
      id: uuidv4(),
      body: '테스트 바디2',
      date: new Date('2022-10-10').toISOString(),
      title: 'test2',
    },
    {
      id: uuidv4(),
      body: '테스트 바디3',
      date: new Date('2022-10-18').toISOString(),
      title: '3test',
    },
    {
      id: uuidv4(),
      body: '테스트 바디4',
      date: new Date().toISOString(),
      title: 'test4',
    },
    {
      id: uuidv4(),
      body: '테스트 바디5',
      date: new Date().toISOString(),
      title: 'test5',
    },
    {
      id: uuidv4(),
      body: '테스트 바디6',
      date: new Date().toISOString(),
      title: 'test6',
    },
    {
      id: uuidv4(),
      body: '테스트 바디7',
      date: new Date().toISOString(),
      title: 'test7',
    },
    {
      id: uuidv4(),
      body: '테스트 바디8',
      date: new Date().toISOString(),
      title: 'test8',
    },
  ]);

  const sortLogs = useMemo(
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
  );

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
