import {types, cast} from 'mobx-state-tree';

import { IDrink } from '~/interface';

export const OrderedDrinkStore = types
  .model('OrderedDrinkStore', {
    user: types.string,
    id: types.string,
    label: types.string,
    price: types.number
  });

export const OrderStore = types
  .model('OrderStore', {
    owner: types.string,
    date: types.Date,
    orderedDrinks: types.optional(types.array(OrderedDrinkStore), [])
  })
  .views(self => ({
    get totalPrice() {
      return self.orderedDrinks.reduce((acc, order) => acc + order.price, 0);
    },

    get totalCount() {
      return self.orderedDrinks.length;
    }
  }))
  .actions(self => ({
    setOwner(owner: string) {
      self.owner = owner;
    },

    updateDate() {
      self.date = new Date();
    },

    addDrink(drink: IDrink, user: string = '') {
      self.orderedDrinks.push(OrderedDrinkStore.create({...drink, user}));
    },

    removeDrink(drink: IDrink) {
      const found = self.orderedDrinks.find(ordered => ordered.id === drink.id);
      self.orderedDrinks.splice(self.orderedDrinks.indexOf(found), 1);
    },

    removeAllDrink(drink: IDrink) {
      self.orderedDrinks = cast(self.orderedDrinks.filter(ordered => ordered.id !== drink.id));
    }
  }));

  export default OrderStore;
