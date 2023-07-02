import { createContext, useContext, useState } from 'react';
const MyContext = createContext();

export function MyProvider({ children }) {
	const detailContext=useState({});
	return <MyContext.Provider value={detailContext}>{children}</MyContext.Provider>;
}
export function useDetailState() {
  const value = useContext(MyContext);
  if (value === undefined) {
    throw new Error('useCounterState should be used within CounterProvider');
  }
  return value;
}