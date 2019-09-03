import * as React from 'react';
import { citiesContext } from '../context/context';
import { useObserver } from 'mobx-react-lite';


const Search: React.FC = () => {
  const store = React.useContext(citiesContext);
  if (!store) {
    throw Error('Store should not be null');
  }

  return useObserver(() => <input value={store.query.get()} onChange={(e) => store.setQuery(e.target.value)} />);
}

export default Search;
