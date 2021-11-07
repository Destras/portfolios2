import React from "react";
import "../styles/PortfoliosItem.scss";

interface IPortfoliosItem {
  children: JSX.Element;
  backgroundImg: any;
}

const PortfoliosItem = ({ children, backgroundImg }: IPortfoliosItem) => {
  return (
    <>
      <div className="portfoliosItem_container">
        <div className="portfoliosItem_title">{children}</div>
      </div>
    </>
  );
};

export default PortfoliosItem;
