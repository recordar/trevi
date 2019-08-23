import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

const useHeaderBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250
    },
  }),
);

const useDrinkCategoryStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);


const useDrinkListStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

const useDrinkStyles = makeStyles((theme: Theme) =>
  createStyles({
    floatingLeft: {
      width: '60%',
    },
    floatingRight: {
      width: '40%',
      float: 'right',
    },
    iconHover: {
      margin: theme.spacing(1),
      '&:hover': {
        color: red[800],
      },
    },
    field: {
      width: '35px',
      textAlign: 'right',
    }
  }),
);

const useOrderButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'fixed',
      bottom: 5,
      right: 0.5,
      backgroundColor: grey[100],
    },
    chip: {
      margin: theme.spacing(1),
    },
    fullWidth: {
      width: '100%',
    }
  }),
);


export {
  useHeaderBarStyles,
  useDrinkCategoryStyles,
  useDrinkListStyles,
  useDrinkStyles,
  useOrderButtonStyles
};
