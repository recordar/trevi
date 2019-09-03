import * as React from 'react';
import { useLocalStore } from 'mobx-react-lite';

import { createDrinkCategoryStore, TDrinkCategoryStore } from '../store/store';

export const DrinkCategoryStoreContext = React.createContext<TDrinkCategoryStore | null>(null);

export const DrinkCategoryStoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createDrinkCategoryStore);

  return (
    <DrinkCategoryStoreContext.Provider value={store}>
      {children}
    </DrinkCategoryStoreContext.Provider>
  );
};

export default DrinkCategoryStoreProvider;
