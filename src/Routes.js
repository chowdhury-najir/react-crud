import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect, } from "react-router-dom";

import Dashboard from "./components/Dashboard"
import FormLayouts from "./components/FormLayouts"
import FormElements from "./components/FormElements"
import Cards from "./components/Cards"
import Debit from "./components/Debit"
import Credit from "./components/Credit"
import Audit from "./components/Audit";
import AuditHistory from "./components/AuditHistory";
import AuditType from "./components/AuditType";
import ExternalAudit from "./components/ExternalAudit";
import InternalAudit from "./components/InternalAudit";

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

      <MasterLayoutRoute exact path = "/Audit" component = {Audit} />
      <MasterLayoutRoute exact path = "/AuditHistory" component = {AuditHistory} />
      <MasterLayoutRoute exact path = "/AuditType" component = {AuditType} />
      <MasterLayoutRoute exact path = "/InternalAudit" component = {InternalAudit} />
      <MasterLayoutRoute exact path = "/ExternalAudit" component = {ExternalAudit} />

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


