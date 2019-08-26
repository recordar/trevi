export interface IHeaderBar {
  title: string;
  hasDrawer?: boolean;
  hasAuth?: boolean;
}

export interface IDrinkCategory {
  name: string;
  summary: string;
  drinks: IDrink[];
}

export interface IDrinkList {
  drinks: IDrink[]
}

export interface IDrink {
  id: string;
  label: string;
  price: number;
}

export interface IOrder {
  owner: string;
  date: Date;
  orderedDrinks: IOrderedDrink[];
}

export interface IOrderedDrink extends IDrink {
  user: string;
}
