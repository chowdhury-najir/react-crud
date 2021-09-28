import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect, } from "react-router-dom";

import Dashboard from "./components/Dashboard"
import FormLayouts from "./components/FormLayouts"
import FormElements from "./components/FormElements"
import Cards from "./components/Cards"
import Debit from "./components/Debit"
import Credit from "./components/Credit"

import MasterLayoutRoute from "./layouts/MasterLayoutClass";




const Routes = (props) => (
  <Router>
    
    
    <Switch>
    <MasterLayoutRoute exact path = "/" component = {Dashboard} />
      <MasterLayoutRoute exact path = "/FormLayouts" component = {FormLayouts} />
      <MasterLayoutRoute exact path = "/FormElements" component = {FormElements} />
      <MasterLayoutRoute exact path = "/Debit" component = {Debit} />
      <MasterLayoutRoute exact path = "/Credit" component = {Credit} />
      <MasterLayoutRoute exact path = "/Cards" component = {Cards} />

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


