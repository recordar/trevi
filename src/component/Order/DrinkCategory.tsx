import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import DrinkList from './DrinkList';
import { IDrink, IOrderedDrink } from '../../interface';
import { useDrinkCategoryStyles } from '../../styles';

interface IDrinkCategoryProps {
  category: string;
  summary: string;
  drinks: IDrink[];
  orderedDrinks: IOrderedDrink[];
  onChangeDrinkCount: (drink: IDrink, count: number) => void;
}

const DrinkCategory = (props: IDrinkCategoryProps) => {
  const classes = useDrinkCategoryStyles({});
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const togglePanel = React.useCallback((panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  }, []);

  const handleChangeDrinkCount = React.useCallback((drink: IDrink, count: number) => {
    props.onChangeDrinkCount(drink, count);
  }, []);

  return (
    <ExpansionPanel expanded={expanded === props.category} onChange={togglePanel(props.category)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.heading}>{props.category}</Typography>
        <Typography className={classes.secondaryHeading}>{props.summary}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <DrinkList drinks={props.drinks} orderedDrinks={props.orderedDrinks} onChangeDrinkCount={handleChangeDrinkCount} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default DrinkCategory;
