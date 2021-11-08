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
        <img className='portfoliosItem_img' src={backgroundImg} alt="portfolio background" />
        <div className="portfoliosItem_title">{children}</div>
      </div>
    </>
  );
};

export default PortfoliosItem;
