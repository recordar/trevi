import * as React from 'react';
import { useObserver } from 'mobx-react-lite';

import { citiesContext } from '../context/context';

const CityView: React.FC<{ cities: string[] }> = ({ cities }) => {
  return (
    <ul>
      {cities.map(city => <li>{city}</li>)}
    </ul>
  )
}


const Search: React.FC = () => {
  const store = React.useContext(citiesContext);
  if (!store) {
    throw Error('Store should not be null');
  }

  return useObserver(() => <input value={store.query.get()} onChange={(e) => store.setQuery(e.target.value)} />);
}

const CityList = () => {
  const store = React.useContext(citiesContext);
  if (!store) {
    throw Error('Store should not be null');
  }

  return useObserver(() => {
    return (
      <>
        <Search />
        <CityView cities={store.filteredCities} />
      </>
    );
  });
}

export default CityList;
