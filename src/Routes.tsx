import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import SideBar from "./components/SideBar";
import Home from "./containers/Home";
import About from "./containers/About";
import NotFound from "./containers/NotFound";
import Portfolios from "./containers/Portfolios";
import Contact from "./containers/Contact";
import AnimatedRoute from "./components/AnimatedRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="overflowHidden">
        <Switch>
          <AnimatedRoute exact path="/" component={Home} />
          <Layout>
            <Switch>
              <AnimatedRoute exact path="/about" component={About} />
              <AnimatedRoute exact path="/portfolio" component={Portfolios} />
              <AnimatedRoute exact path="/contact" component={Contact} />
              <AnimatedRoute component={NotFound} />
            </Switch>
          </Layout>
        </Switch>
        <SideBar />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
