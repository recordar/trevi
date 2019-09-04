import { IOrder, IOrderedDrink } from "~/interface";

export const initOrder: IOrder = {
  owner: '',
  date: new Date(),
  orderedDrinks: Array<IOrderedDrink>()
}
