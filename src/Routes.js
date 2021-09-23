import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect, } from "react-router-dom";

import Dashboard from "./components/Dashboard"
import FormLayout from "./components/FormLayout"
import FormElements from "./components/FormElements"
import Card from "./components/Card"
import Debit from "./components/Debit"
import Credit from "./components/Credit"

import MasterLayout from "./layouts/MasterLayout"
import Sidebar from "./layouts/partials/Sidebar";
import Header from "./layouts/partials/Header";
import Footer from "./layouts/partials/Footer";
import MasterLayoutRoute from "./layouts/MasterLayout";




const Routes = (props) => (
  <Router>
    
    
    <Switch>
    <MasterLayoutRoute exact path = "/" component = {FormLayout} />
      <MasterLayoutRoute exact path = "/form-layouts" component = {FormLayout} />
      <MasterLayoutRoute exact path = "/form-elements" component = {FormElements} />
      <MasterLayoutRoute exact path = "/debit" component = {Debit} />
      <MasterLayoutRoute exact path = "/credit" component = {Credit} />
      <MasterLayoutRoute exact path = "/cards" component = {Card} />

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


