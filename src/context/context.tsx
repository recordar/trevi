import * as React from 'react';
import { TStore, createCitiesStore } from '../store/store';
import { useLocalStore } from 'mobx-react-lite';


export const citiesContext = React.createContext<TStore | null>(null);

const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createCitiesStore);

  return (
    <citiesContext.Provider value={store}>
      {children}
    </citiesContext.Provider>
  );
}

export default StoreProvider;
