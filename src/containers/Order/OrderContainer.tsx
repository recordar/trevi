import * as React from 'react';
import { observer } from 'mobx-react';
import { Container } from '@material-ui/core';

import DrinkCategory from '~/component/Order/DrinkCategory'
import OrderChip from '~/component/Order/OrderChip';
import OrderButton from '~/component/Order/OrderButton';

import { useOrderButtonStyles } from '../../styles';
import { IDrink } from '~/interface';
import * as ArrayUtils from '~/utils/ArrayUtils';

import stores from '~/stores';

const OrderContainer = () => {
  const classes = useOrderButtonStyles({});
  const { orderStore, menuStore } = stores;
  const containerEl = React.useRef(null);

  React.useEffect(() => {
    // Container 가 높아짐에따라 주문영역 가려지는 부분 해결
    const el = containerEl.current;
    if (el) {
      (document.getElementById('app').style.paddingBottom = `${el.clientHeight}px`)
    }
  }, [orderStore.orderedDrinks.length]);

  const handleChangeDrinkCount = (drink: IDrink, idAdding: boolean) => {
    idAdding ? orderStore.addDrink(drink) : orderStore.removeDrink(drink);
  };

  const handleChipClick = (drink: IDrink) => {
    const drinkEl = document.getElementById(drink.id);
    if (drinkEl) {
      drinkEl.focus();
      drinkEl.scrollTo();
    }
  };

  const handleChipDelete = (drink: IDrink) => {
    orderStore.removeAllDrink(drink);
  };

  const groupByOrderedDrinkId = ArrayUtils.groupBy(orderStore.orderedDrinks, ordered => ordered.id);
  return (
    <>
      {
        menuStore.categories.map(category =>
          <DrinkCategory
            {...category}
            orderedDrinks={orderStore.orderedDrinks}
            onChangeDrinkCount={handleChangeDrinkCount}
            key={category.name}
          />
        )
      }

      <Container ref={containerEl} className={classes.container}>
        <div>
          {
            Object.keys(groupByOrderedDrinkId).map(key => {
              return (
                <OrderChip
                  key={key}
                  drink={groupByOrderedDrinkId[key][0]}
                  count={groupByOrderedDrinkId[key].length}
                  onClick={handleChipClick}
                  onDelete={handleChipDelete}
                />
              )
            })
          }
        </div>
        <OrderButton
          totalCount={orderStore.totalCount}
          totalPrice={orderStore.totalPrice} />
      </Container>
    </>
  );
};

export default observer(OrderContainer);
