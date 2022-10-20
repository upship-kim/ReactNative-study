import {View, Text} from 'react-native';
import React, {createContext, PropsWithChildren, useState} from 'react';

type SearchTypes = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

const SearchContext = createContext<SearchTypes>({
  keyword: '',
  setKeyword: () => {},
});
export const SearchContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <SearchContext.Provider value={{keyword, setKeyword}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
