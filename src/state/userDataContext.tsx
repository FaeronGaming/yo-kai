import React, { createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

interface UserData {}

const UserDataContext = createContext({});

export const UserDataProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useLocalStorage<UserData>('userData', {});

  return (
    <UserDataContext.Provider value={{userData}}>
      {children}
    </UserDataContext.Provider>
  )
};
