import React from "react";
import "../styles/Title.scss";

interface ITitle {
  children: JSX.Element;
  subTitle: string;
}
const Title = ({ children, subTitle }: ITitle) => {
  return (
    <div className="titleContainer">
      <h1 className="titleContainer_title">{children}</h1>
      <h2 className="titleContainer_subTitle">{subTitle}</h2>
    </div>
  );
};

export default Title;
