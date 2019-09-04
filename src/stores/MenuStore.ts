import {types} from 'mobx-state-tree';

export const DrinkStore = types
  .model('DrinkStore', {
    id: types.string,
    label: types.string,
    price: types.number
  });


export const CategoryStore = types
  .model('CategoryStore', {
    name: types.string,
    summary: types.string,
    drinks: types.optional(types.array(DrinkStore), [])
  });


export const MenuStore = types
  .model('MuneStore', {
    categories: types.optional(types.array(CategoryStore), [])
  })
  .actions(self => ({
    addCategory(name: string, summary?: string) {
      const category = CategoryStore.create({name, summary, drinks: []});
      self.categories.push(category);
    },
    addDrink(id: string, label: string, price: number, ctname: string, summary?: string) {
      const found = self.categories.find(category => category.name === ctname);
      if (found) {
        found.drinks.push(DrinkStore.create({ id, label, price }));
      } else {
        self.categories.push(CategoryStore.create({
          name: ctname,
          summary: summary || '',
          drinks: [DrinkStore.create({ id, label, price })]
        }));
      }
    },
  }));

  export default MenuStore;
