import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import SideBar from "./components/SideBar";
import Home from "./containers/Home";
import About from "./containers/About";
import NotFound from "./containers/NotFound";
import Portfolios from "./containers/Portfolios";
import Contact from "./containers/Contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Layout>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolios} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Switch>
      <SideBar />
    </BrowserRouter>
  );
};

export default Routes;
