import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type UserType = {
  id: string;
  displayName: string | null;
  photoURL: string | null;
} | null;

type UserContextTypes = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

const init = {
  id: '',
  displayName: null,
  photoURL: null,
};
const UserContext = createContext<UserContextTypes>({
  user: init,
  setUser: () => {},
});

export const UserContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType>(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('empty userContext');
  }
  return userContext;
};
