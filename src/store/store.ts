import { observable } from 'mobx';

import { IDrinkCategory } from "../interface";

const initDrinkCategories: IDrinkCategory[] = [
  {
    name: 'Coffee',
    summary: 'Caffeine',
    drinks: [
      {
        id: 'HA',
        label: 'Americano',
        price: 500,
      },
      {
        id: 'IA',
        label: 'Ice Americano',
        price: 500,
      },
      {
        id: 'HL',
        label: 'Cafe Latte',
        price: 500,
      },
      {
        id: 'IL',
        label: 'Ice Cafe Latte',
        price: 500,
      },
      {
        id: 'HM',
        label: 'Cafe Mocha',
        price: 500,
      },
      {
        id: 'IM',
        label: 'Ice Cafe Mocha',
        price: 500,
      }
    ],
  },
  {
    name: 'Aid',
    summary: 'Non Caffeine',
    drinks: [
      {
        id: 'LA',
        label: 'Lemon Aid',
        price: 500,
      },
      {
        id: 'AA',
        label: 'Apple Aid',
        price: 500,
      },
    ],
  },
  {
    name: 'Smoothie',
    summary: 'Ice Blended',
    drinks: [
      {
        id: 'SS',
        label: 'Strawberry Smoothie',
        price: 1000,
      },
      {
        id: 'BS',
        label: 'Blueberry Smoothie',
        price: 1000,
      },
      {
        id: 'PYS',
        label: 'Plain Yogurt Smoothie',
        price: 1000,
      }
    ],
  }
];

const Cities = [
  'Amsterdam',
  'London',
  'Madrid'
];

export const createCitiesStore = () => {
  const store = {
    get allCities() {
      return Cities;
    },
    query: observable.box(''),
    setQuery(query: string) {
      store.query.set(query.toLowerCase());
    },
    get filteredCities() {
      return Cities.filter(city => city.toLowerCase().includes(store.query.get()))
    }
  };

  return store;
}

export type TStore = ReturnType<typeof createCitiesStore>

export const createDrinkCategoryStore = () => {
  const store = {
    get allCategories() {
      return initDrinkCategories
    },
  };

  return store;
}

export type TDrinkCategoryStore = ReturnType<typeof createDrinkCategoryStore>
