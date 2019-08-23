import * as React from 'react';
import { TextField, Icon, Typography } from '@material-ui/core';

import { IOrderedDrink, IDrink } from '../../interface';
import { useDrinkStyles } from '../../styles';

interface IDrinkProps extends IOrderedDrink {
  onChangeCount: (drink: IDrink, count: number) => void;
  children?: IDrinkProps[];
}

const Drink = (props: IDrinkProps) => {
  const classes = useDrinkStyles({});
  const { count, drink } = props;

  const handleRemoveCount = React.useCallback(() => {
    if (0 < count) {
      props.onChangeCount(drink, count - 1)
    }
  }, [count]);

  const handleAddCount = React.useCallback(() => {
    props.onChangeCount(drink, count + 1);
  }, [count]);

  return (
    <>
      <div className={classes.floatingLeft}>
        <Typography variant="overline" component="h3" color="textSecondary" gutterBottom={true}>
          {drink.label}
        </Typography>
      </div>
      <div className={classes.floatingRight}>
        <Icon
          onClick={handleRemoveCount}
          color="primary"
          className={classes.iconHover}>
          remove_circle
        </Icon>
        <TextField
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          value={count}
          className={classes.field}
        />
        <Icon
          onClick={handleAddCount}
          color="primary"
          className={classes.iconHover}>
          add_circle
        </Icon>
      </div>
    </>
  );
}

export default Drink;
