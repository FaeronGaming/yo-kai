import React, { createContext, useContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

interface UserData {
  [username: string]: {
    [key: string]: boolean;
  };
}

type DataContext = [UserData, (data: UserData) => void];

const UserDataContext = createContext<DataContext>([{}, () => {}]);

export const useData = () => useContext(UserDataContext);

export function useUsernames() {
  const [userData] = useContext(UserDataContext);
  return Object.keys(userData);
}

export const UserDataProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useLocalStorage<UserData>('userData', {
    'You': {}
  });

  return (
    <UserDataContext.Provider value={[userData, setUserData]}>
      {children}
    </UserDataContext.Provider>
  )
};
