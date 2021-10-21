import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard"
import AddCorporateSanction from "./components/AddCorporateSanction"
import AddIndividualSanction from "./components/AddIndividualSanction"
import SanctionList from './components/ViewSanctionList'


import MasterLayoutRoute from "./layouts/MasterLayoutClass";




const Routes = () => (
  <Router>
    <Switch>
    <MasterLayoutRoute exact path = "/" component = {Dashboard} />
      <MasterLayoutRoute exact path = "/AddIndividualSanction" component = {AddIndividualSanction} />
      <MasterLayoutRoute exact path = "/AddCorporateSanction" component = {AddCorporateSanction} />
      <MasterLayoutRoute exact path = "/SanctionList" component = {SanctionList} />

    {/* <Route exact path = "/form-layouts" >
      <FormLayout />
    </Route>

    <Route path = "/form-elements" >
    <FormElements/>
    </Route>

    <Route path = "/cards" >
      <Card/>
    </Route> */}

    </Switch>
</Router>
);
export default Routes;


