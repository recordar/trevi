import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from '@material-ui/core';

import DrinkCategory from '../../component/Order/DrinkCategory';
import OrderChip from '../../component/Order/OrderChip';
import OrderButton from '../../component/Order/OrderButton';

import useOrderState from '../../hook/Order/userOrderState';
import { useOrderButtonStyles } from '../../styles';
import { IDrink, IDrinkCategory } from '../../interface';


const initCategories: IDrinkCategory[] = [
  {
    category: 'Coffee',
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
    category: 'Aid',
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
    category: 'Smoothie',
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

const OrderContainer = observer(() => {
  const classes = useOrderButtonStyles({});
  const {
    getTotalPrice,
    orderedDrinks,
    updateDrink,
    removeDrink,
  } = useOrderState();
  const containerEl = React.useRef(null);

  React.useEffect(() => {
    // Container 가 높아짐에따라 주문영역 가려지는 부분 해결
    const el = containerEl.current;
    el && (document.getElementById('app').style.paddingBottom = `${el.clientHeight}px`);
  }, [orderedDrinks.length]);

  const handleChangeDrinkCount = (drink: IDrink, count: number) => {
    updateDrink(drink, count);
  };

  const handleChipDelete = (drink: IDrink) => {
    removeDrink(drink);
  };

  const handleChipClick = (drink: IDrink) => {
    const drinkEl = document.getElementById(drink.id);
    if (drinkEl) {
      drinkEl.focus();
      drinkEl.scrollTo();
    }
  };

  const getTotalCount = React.useCallback(() => orderedDrinks.reduce((acc, drink) => acc + drink.count, 0), [orderedDrinks]);

  return (
    <>
      {
        initCategories.map(category =>
          <DrinkCategory
            {...category}
            orderedDrinks={orderedDrinks}
            onChangeDrinkCount={handleChangeDrinkCount}
            key={category.category}
          />
        )
      }

      <Container ref={containerEl} className={classes.container}>
        <div>
          {
            orderedDrinks.map(orderedDrink =>
              <OrderChip
                key={orderedDrink.drink.id}
                drink={orderedDrink.drink}
                count={orderedDrink.count}
                onClick={handleChipClick}
                onDelete={handleChipDelete}
              />
            )
          }
        </div>
        <OrderButton
          totalCount={getTotalCount()}
          totalPrice={getTotalPrice()} />
      </Container>
    </>
  );
});

export default OrderContainer;
