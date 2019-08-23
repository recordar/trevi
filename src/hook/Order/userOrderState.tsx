import { useObservable } from 'mobx-react-lite';

import { IOrderedDrink, IOrder, IDrink } from '../../interface';

const initOrder: IOrder = {
  owner: '',
  date: new Date(),
  orderedDrinks: Array<IOrderedDrink>()
}

const useOrderState = () => {
  const store = useObservable({
    order: initOrder,

    setOwner(owner: string) {
      store.order.owner = owner;
    },

    updateDate() {
      store.order.date = new Date();
    },

    removeDrink(drink: IDrink) {
      store.order.orderedDrinks = store.order.orderedDrinks.filter(ordered => ordered.drink.id !== drink.id);
    },

    updateDrink(drink: IDrink, count: number) {
      const found = store.order.orderedDrinks.find((orderedDrink) => orderedDrink.drink.id === drink.id);
      if (!found) {
        store.order.orderedDrinks.push({
          user: '',
          drink,
          count: 1
        });
      } else {
        if (count === 0) {
          store.order.orderedDrinks.splice(store.order.orderedDrinks.indexOf(found), 1);
        } else {
          found.count = count;
        }
      }
    },

    clearDrinks() {
      store.order.orderedDrinks = Array<IOrderedDrink>();
    }
  });

  const getTotalPrice = () => {
    return store.order.orderedDrinks.reduce((acc, order) => acc + (order.drink.price * order.count), 0);
  }

  return {
    owner: store.order.owner,
    date: store.order.date,
    orderedDrinks: store.order.orderedDrinks,

    setOwner: store.setOwner,
    updateDate: store.updateDate,
    removeDrink: store.removeDrink,
    updateDrink: store.updateDrink,
    clearDrinks: store.clearDrinks,
    getTotalPrice,
  };
}

export default useOrderState;
