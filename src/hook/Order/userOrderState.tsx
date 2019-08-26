import * as React from 'react';
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

    addDrink(drink: IDrink, user: string = '') {
      store.order.orderedDrinks.push({ user, id: drink.id, label: drink.label, price: drink.price });
    },

    removeDrink(drink: IDrink) {
      const found = store.order.orderedDrinks.find(ordered => ordered.id === drink.id);
      store.order.orderedDrinks.splice(store.order.orderedDrinks.indexOf(found), 1);
    },

    removeAllDrink(drink: IDrink) {
      store.order.orderedDrinks = store.order.orderedDrinks.filter(ordered => ordered.id !== drink.id);
    },

    clearDrinks() {
      store.order.orderedDrinks = Array<IOrderedDrink>();
    }
  });

  const totalPrice = React.useMemo(() => store.order.orderedDrinks.reduce((acc, order) => acc + order.price, 0), [store.order.orderedDrinks.length]);
  const totlaCount = store.order.orderedDrinks.length;

  return {
    owner: store.order.owner,
    date: store.order.date,
    orderedDrinks: store.order.orderedDrinks,

    setOwner: store.setOwner,
    updateDate: store.updateDate,
    addDrink: store.addDrink,
    removeDrink: store.removeDrink,
    removeAllDrink: store.removeAllDrink,
    clearDrinks: store.clearDrinks,
    totalPrice,
    totlaCount,
  };
}

export default useOrderState;
