import * as React from 'react';
import { List, ListItem } from '@material-ui/core';

import Drink from './Drink';
import { useDrinkListStyles } from '../../styles';
import { IDrinkList, IDrink, IOrderedDrink } from '../../interface';

interface IDrinkListProps extends IDrinkList {
  orderedDrinks: IOrderedDrink[];
  onChangeDrinkCount: (drink: IDrink, count: number) => void;
}

const DrinkList = (props: IDrinkListProps) => {
  const classes = useDrinkListStyles({});
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = React.useCallback((index: number) => (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.FocusEvent<HTMLDivElement>
  ): void => {
    setSelectedIndex(index);
  }, []);

  const handleChangeCount = React.useCallback((drink: IDrink, count: number) => {
    props.onChangeDrinkCount(drink, count);
  }, []);

  return (
    <>
      <List component="div" aria-label="secondary mailbox folder" className={classes.root}>
        {props.drinks.map((drink, key) => {
          const found = props.orderedDrinks.find(order => order.drink.id === drink.id);
          const count = found ? found.count : 0;

          return (
            <ListItem
              id={drink.id}
              key={drink.label}
              button={true}
              selected={selectedIndex === key}
              onClick={handleListItemClick(key)}
              onBlur={handleListItemClick(-1)}>
              <Drink
                user=''
                key={drink.label}
                drink={drink}
                count={count}
                onChangeCount={handleChangeCount} />
            </ListItem>
          );
        })}
      </List>
    </>
  )
}

export default DrinkList;
