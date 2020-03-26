import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Logon from '../Pages/Logon';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import NewIncidents from '../Pages/NewIncidents';

function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/new" component={NewIncidents} />
        </Switch>
    </BrowserRouter>
  );
}

export default Router;
