import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import TopNav from "./common/TopNav";
import Sidebar from "./common/Sidebar";
import HomePage from "./pages/HomePage";
import SanctionPage from "./pages/SanctionPage"
import SanctionTypePage from "./pages/SanctionTypePage";
import AddSanction from "./components/Sanction/AddSanction";
function App() {
  return (
    <Router>
      <TopNav />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Sanction"  >
          <SanctionPage />
        </Route>
        {/* <Route exact path="/AddIndividualSanction"  >
          <HomePage />
        </Route> */}
        {/* <Route exact path="/sanction-type-list" component={SanctionTypePage} /> */}

        <Route
        exact
            path="/AddIndividualSanction"
            render={(props) => (
              <AddSanction {...props}  />
            )}
          />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
