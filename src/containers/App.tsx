import * as React from 'react';
import { Redirect } from 'react-router';
import { Route, Switch } from "react-router-dom";
import { Router } from 'react-router-dom';


import HeaderBar from '../component/Common/HeaderBar';
import WaitingContainer from './Common/WaitingContainer';
import OrderContainer from './Order/OrderContainer';
import OrderHistoryContainer from './History/OrderHistoryContainer';

import browserHistory from '../utils/BrowserHistory';

const App = () => {
  const [title, setTitle] = React.useState('order');

  browserHistory.listen(location => {
    setTitle(location.pathname.replace(/\//g, ''));
  });

  return (
    <HeaderBar title={title}>
      <Router history={browserHistory}>
        <Switch>
          <Redirect exact={true} path="/" to="/order" />

          <Route exact={true} path="/order" component={OrderContainer} />
          <Route exact={true} path="/history" component={OrderHistoryContainer} />

          <Route exact={true} path="/waiting" component={WaitingContainer} />
        </Switch>
      </Router>
    </HeaderBar>
  );
}

export default App;
