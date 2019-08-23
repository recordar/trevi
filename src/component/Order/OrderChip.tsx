import * as React from 'react';
import { Chip, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { Filter1, Filter2, Filter3, Filter4, Filter5, Filter6, Filter7, Filter8, Filter9, Filter9Plus } from '@material-ui/icons';

import { useOrderButtonStyles } from '../../styles';
import { IDrink } from '../../interface';


const icons = [<></>, <Filter1 />, <Filter2 />, <Filter3 />, <Filter4 />, <Filter5 />, <Filter6 />, <Filter7 />, <Filter8 />, <Filter9 />, <Filter9Plus />];

interface IOrderChipProps {
  drink: IDrink;
  count: number;
  onClick: (drink: IDrink) => void;
  onDelete: (drink: IDrink) => void;
}

const OrderChip = (props: IOrderChipProps) => {
  const classes = useOrderButtonStyles({});
  const [showDialog, setDialog] = React.useState(false);
  const { count, drink, onClick, onDelete } = props;

  const handleChipClick = React.useCallback(() => {
    onClick(drink);
  }, [drink]);

  const handleChipRemove = React.useCallback(() => {
    setDialog(true);
    onDelete(drink);
  }, [drink]);

  const openDialog = () => {
    setDialog(true);
  }

  const closeDialog = () => {
    setDialog(false);
  }

  return (
    <>
      <Chip
        icon={icons[count < 10 ? count : 10]}
        label={props.drink.label}
        onClick={handleChipClick}
        onDelete={openDialog}
        className={classes.chip}
        color="secondary"
        variant="outlined"
      />
      <Dialog
        open={showDialog}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Are you sure to remove the ${props.count} ${props.drink.label}?`}</DialogTitle>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            CANCEL
          </Button>
          <Button onClick={handleChipRemove} color="primary" autoFocus={true}>
            REMOVE
        </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OrderChip;
