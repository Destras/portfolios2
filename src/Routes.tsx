import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import About from "./containers/About";
import SideBar from "./components/SideBar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Layout>
          <>
            <Route exact path="/about" component={About} />
          </>
        </Layout>
      </Switch>
      <SideBar />
    </BrowserRouter>
  );
};

export default Routes;
