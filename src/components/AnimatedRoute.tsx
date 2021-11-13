import React from "react";
import { nanoid } from "nanoid";
import { Route, RouteProps } from "react-router-dom";
import "../styles/AnimatedRoute.scss";

const AnimatedRoute = (props: RouteProps) => {
  return (
    <>
      <div key={nanoid()} className="frontalCover" />
      <div key={nanoid()} className="animatedRoute">
        <Route {...props} />
      </div>
    </>
  );
};

export default AnimatedRoute;
