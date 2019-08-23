import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { IHeaderBar } from '../../interface';
import * as Styles from '../../styles';
import browserHistory from '../../utils/BrowserHistory';

interface IHeaderBarProps extends IHeaderBar {
  children: React.ReactNode;
}

const HeaderBar = (props: IHeaderBarProps) => {
  const classes = Styles.useHeaderBarStyles({});

  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  }

  const movePage = (text: string) => {
    browserHistory.push(`/${text.toLocaleLowerCase()}`);
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar color="secondary">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.title}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={drawer}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {['Order', 'History'].map((text, index) => (
                <ListItem button key={text} onClick={movePage.bind(this, text)}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </SwipeableDrawer>
      </div>
      {props.children}
    </div>
  );
}

export default HeaderBar;
