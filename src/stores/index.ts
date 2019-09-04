import {types} from 'mobx-state-tree';

import { MenuStore, CategoryStore, DrinkStore } from '~/stores/MenuStore';
import { OrderStore } from "~/stores/OrderStore";
import { initDrinkCategories } from '~/__mock__/Order/menu';
import { initOrder } from '~/__mock__/Order/order';


const categories = initDrinkCategories.map(category => {
  return CategoryStore.create({
    name: category.name,
    summary: category.summary,
    drinks: category.drinks.map(({id, label, price}) => DrinkStore.create({id, label, price}))
  })
});

const menuStore = MenuStore.create({
  categories
});

const orderStore = OrderStore.create({...initOrder});

const rootStore = types.model('RootStore', {
  menuStore: types.maybe(MenuStore),
  orderStore: types.maybe(OrderStore)
});

const stores = rootStore.create({
  menuStore,
  orderStore
});

export default stores;
