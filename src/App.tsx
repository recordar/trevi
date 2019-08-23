import * as React from 'react';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import WaitingContainer from './containers/Common/WaitingContainer';

// import { AppContext } from '../context';

const AppRouter = () => {
  return (
    <Switch>
      <Redirect exact={true} path="/" to="/waiting" />
      {/* <Route exact path="/name" component={Name} /> */}
      {/* <Route exact path="/theme" component={Theme} /> */}
      <Route exact={true} path="/waiting" component={WaitingContainer} />
    </Switch>
  );
};

export default AppRouter;
