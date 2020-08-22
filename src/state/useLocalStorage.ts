import { useState } from "react";

type SetValueCallback<T> = (currentState: T) => T;

type LocalStorage<T> = [
  T,
  (value: T | SetValueCallback<T>) => void
];

export function useLocalStorage<T>(key: string, initialValue: T): LocalStorage<T> {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  const setValue = (value: T | SetValueCallback<T>) => {
    try {
      const toStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(toStore);
      window.localStorage.setItem(key, JSON.stringify(toStore));
    } catch (e) {
      console.error(e);
    }
  }

  return [storedValue, setValue];
}
