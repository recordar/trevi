import { IDrinkCategory } from "../../interface";

export const initDrinkCategories: IDrinkCategory[] = [
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
