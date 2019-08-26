import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from '@material-ui/core';

import DrinkCategory from '../../component/Order/DrinkCategory';
import OrderChip from '../../component/Order/OrderChip';
import OrderButton from '../../component/Order/OrderButton';

import useOrderState from '../../hook/Order/userOrderState';
import { useOrderButtonStyles } from '../../styles';
import { IDrink } from '../../interface';
import useDrinkState from '../../hook/Order/useDrinkState';
import * as ArrayUtils from '../../utils/ArrayUtils';

const OrderContainer = observer(() => {
  const classes = useOrderButtonStyles({});
  const {
    totalPrice,
    totlaCount,
    orderedDrinks,
    addDrink,
    removeDrink,
    removeAllDrink,
  } = useOrderState();
  const { categories } = useDrinkState();
  const containerEl = React.useRef(null);

  React.useEffect(() => {
    // Container 가 높아짐에따라 주문영역 가려지는 부분 해결
    const el = containerEl.current;
    el && (document.getElementById('app').style.paddingBottom = `${el.clientHeight}px`);
  }, [orderedDrinks.length]);

  const handleChangeDrinkCount = (drink: IDrink, idAdding: boolean) => {
    idAdding ? addDrink(drink) : removeDrink(drink);
  };

  const handleChipDelete = (drink: IDrink) => {
    removeAllDrink(drink);
  };

  const handleChipClick = (drink: IDrink) => {
    const drinkEl = document.getElementById(drink.id);
    if (drinkEl) {
      drinkEl.focus();
      drinkEl.scrollTo();
    }
  };

  const groupByOrderedDrinkId = ArrayUtils.groupBy(orderedDrinks, ordered => ordered.id);
  return (
    <>
      {
        categories.map(category =>
          <DrinkCategory
            {...category}
            orderedDrinks={orderedDrinks}
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
          totalCount={totlaCount}
          totalPrice={totalPrice} />
      </Container>
    </>
  );
});

export default OrderContainer;
