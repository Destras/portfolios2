import React from "react";
import '../styles/Portfolios.scss'
import Title from "../components/Title";
import PortfoliosItem from "../components/PortfoliosItem";

const Portfolios = () => {
  return (
    <div>
      <Title subTitle="works">
        <span>
          MY <span className="works_titleColor">PORTFOLIO</span>
        </span>
      </Title>
      <div className='works_projectContainer'>
        <PortfoliosItem backgroundImg={""}>
          <span>probando</span>
        </PortfoliosItem>
        <PortfoliosItem backgroundImg={""}>
          <span>probando</span>
        </PortfoliosItem>
        <PortfoliosItem backgroundImg={""}>
          <span>probando</span>
        </PortfoliosItem>
      </div>
    </div>
  );
};

export default Portfolios;
