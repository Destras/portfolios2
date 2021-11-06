import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./app.scss";

const rootEl = document.getElementById("root");

const App = () => {
  return <Routes />;
};

ReactDOM.render(<App />, rootEl);
