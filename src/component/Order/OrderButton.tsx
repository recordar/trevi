import * as React from 'react';
import { Button, Badge } from '@material-ui/core';

import { useOrderButtonStyles } from '../../styles';

interface IOrderButtonProps {
  totalPrice: number;
  totalCount: number;
}

const OrderButton = (props: IOrderButtonProps) => {
  const classes = useOrderButtonStyles({});

  const disabled = React.useMemo(() => props.totalPrice === 0, [props.totalPrice]);

  return (
    <>
      <Badge color="secondary" badgeContent={props.totalCount} className={classes.fullWidth}>
        <Button variant="contained" size="large" color="primary" className={classes.fullWidth} disabled={disabled}>
          {`ORDER ₩ ${new Intl.NumberFormat().format(props.totalPrice)}`}
        </Button>
      </Badge>
    </>
  )
};

export default OrderButton;
